export const getOptions = (normalizeResults, maxPoint, labelsQuantity) => ({
  responsive: true,
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
        normalizeResults.length < 0
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
      radius: 9,
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

export const getData = (plan, points, labels) => ({
  labels,
  datasets: [
    {
      label: 'План',
      data: plan,
      borderColor: '#091E3F',
      backgroundColor: '#091E3F',
    },
    {
      label: 'Факт',
      data: points,
      borderColor: '#FF6B08',
      backgroundColor: '#FF6B08',
    },
  ],
});

export const getPlanValues = (
  startDate,
  deadlineDate,
  totalPages,
  normalizeResults,
) => {
  const perDay = getPagesPerDay(startDate, deadlineDate, totalPages);
  return new Array(normalizeResults.length).fill(perDay);
};

export const getPagesPerDay = (startDate, deadlineDate, totalPages) => {
  const days =
    (new Date(deadlineDate) - new Date(startDate)) / 1000 / 60 / 60 / 24;
  return Math.ceil(totalPages / days);
};

export const getNormalizeResults = (results, startDate) => {
  const allDatePoints = results.map(p => new Date(p.date).toLocaleDateString());
  const normalizeResults = [];
  allDatePoints.reduce((acc, label, idx, arr) => {
    const isIn = acc.includes(label);
    if (isIn) {
      normalizeResults[normalizeResults.length - 1].pointResult +=
        results[idx].pointResult;
    } else {
      normalizeResults.push({
        date: new Date(results[idx].date).toLocaleDateString(),
        pointResult: results[idx].pointResult,
      });
    }
    return isIn ? acc : [...acc, label];
  }, []);
  return [
    { date: new Date(startDate).toLocaleDateString(), pointResult: 0 },
    ...normalizeResults,
  ];
};
