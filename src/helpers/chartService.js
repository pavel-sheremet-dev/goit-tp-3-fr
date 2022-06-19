import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

export const getOptions = (normalizeResults, maxPoint, labelsQuantity) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      align: 'start',
      position: 'top',
      labels: {
        padding: 15,
        usePointStyle: true,
        generateLabels: chart => {
          const data = chart.data;
          return data.datasets.map(dataset => ({
            text: dataset.label,
            fillStyle: dataset.borderColor,
            fontColor: '#242A37',
          }));
        },
      },
    },
  },

  layout: {
    autoPadding: true,
    padding: 0,
  },
  scales: {
    x: {
      min:
        normalizeResults.length <= 0
          ? labelsQuantity
          : normalizeResults.length - labelsQuantity,
      max: normalizeResults.length - 1,
      grid: {
        borderColor: '#B1B5C2',
        borderWidth: 1,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        color: '#B1B5C2',
      },
      ticks: {
        display: false,
        color: '#000000',
      },
    },
    y: {
      min: 0,
      max: maxPoint + 10,
      grid: {
        display: false,
        borderColor: '#B1B5C2',
      },
      ticks: {
        display: false,
        color: '#000000',
      },
    },
  },
  elements: {
    point: {
      radius: 6,
      hoverRadius: 12,
      borderWidth: 0,
      hoverBorderWidth: 0,
    },
    line: {
      tension: 0.3,
      borderCapStyle: 'round',
    },
  },
});

export const getData = (plan, points, labels) => {
  return {
    labels: labels.length === 1 ? ['start', ...labels] : labels,
    datasets: [
      {
        label: language.resolvedLanguage === 'uk' ? 'План' : 'Plan',
        data: plan.length === 1 ? [0, ...plan] : plan,
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
      },
      {
        label: language.resolvedLanguage === 'uk' ? 'Факт' : 'Act',
        data: points.length === 1 ? [0, ...points] : points,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
      },
    ],
  };
};

export const getPlanValues = (deadlineDate, totalPages, normalizeResults) => {
  const readPagesStatus = getReadPagesStatus(normalizeResults);
  const arr = normalizeResults.map((result, i) =>
    getPagesPerDay(readPagesStatus[i], deadlineDate, totalPages, result),
  );
  return arr;
};

const getReadPagesStatus = normalizeResults => {
  const array = normalizeResults.reduce(
    (acc, result, idx) => [...acc, result.pointResult + acc[idx]],
    [0],
  );
  return array.slice(1, array.length);
};

export const getPagesPerDay = (
  readedPages,
  deadlineDate,
  totalPages,
  result,
) => {
  const days =
    (new Date(deadlineDate) -
      new Date(result.date.split('.').reverse().join('-'))) /
    1000 /
    60 /
    60 /
    24;

  const delta = result.pointResult ? 1 : 0;

  const leftFullDays = days > 1 ? Math.floor(days - delta) : 1;
  const leftPages = totalPages > readedPages ? totalPages - readedPages : 0;
  return Math.round(leftPages / leftFullDays);
};

export const getNormalizeResults = (results, startDate) => {
  const updateResults = [
    { date: startDate, pointResult: 0 },
    ...results,
    { date: new Date().toDateString(), pointResult: 0 },
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  const allDatePoints = updateResults.map(p =>
    new Date(p.date).toLocaleDateString(),
  );
  const normalizeResults = [];
  allDatePoints.reduce((acc, label, idx, arr) => {
    const isIn = acc.includes(label);
    if (isIn) {
      normalizeResults[normalizeResults.length - 1].pointResult +=
        updateResults[idx].pointResult;
    } else {
      normalizeResults.push({
        date: new Date(updateResults[idx].date).toLocaleDateString(),
        pointResult: updateResults[idx].pointResult,
      });
    }
    return isIn ? acc : [...acc, label];
  }, []);
  return normalizeResults;
};
