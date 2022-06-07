import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const getOptions = (normalizeResults, maxPoint) => ({
  responsive: false,
  plugins: {
    legend: {
      align: 'start',
      position: 'top',
      labels: {
        padding: 20,
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
      min: normalizeResults.length < 0 ? 7 : normalizeResults.length - 7,
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

const getData = (plan, points, labels) => ({
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

const getPlanValues = (
  startDate,
  deadlineDate,
  totalPages,
  normalizeResults,
) => {
  const days =
    (new Date(deadlineDate) - new Date(startDate)) / 1000 / 60 / 60 / 24;

  const perDay = Math.ceil(totalPages / days);

  const plan = new Array(normalizeResults.length).fill(perDay);

  return plan;
};

const getNormalizeResults = results => {
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
  return normalizeResults;
};

const StatGraph = ({ responce }) => {
  const { results, deadlineDate, startDate, totalPages } = responce;

  const normalizeResults = getNormalizeResults(results);

  const plan = getPlanValues(
    startDate,
    deadlineDate,
    totalPages,
    normalizeResults,
  );

  const points = normalizeResults.map(p => p.pointResult);
  const maxPoint = Math.max(...points);
  const normalizeLabels = normalizeResults.map(p => p.date);

  return (
    <Line
      options={getOptions(normalizeResults, maxPoint)}
      data={getData(plan, points, normalizeLabels)}
      width={500}
      height={200}
    />
  );
};

export default StatGraph;
