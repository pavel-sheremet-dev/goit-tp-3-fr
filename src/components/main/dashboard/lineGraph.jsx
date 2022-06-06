import { createRef, useEffect } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';
import { ContainerChart } from './styled/line';
// eslint-disable-next-line no-unused-expressions
Chart.defaults.plugins.legend;
Chart.defaults.font.family = 'Montserrat';
Chart.defaults.color = 'white';
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
);
let myLineChart;

const LineGraph = ({ data, average, labels }) => {
  const chartRef = createRef();
  useEffect(() => {
    buildChart();
  }, [buildChart]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function buildChart() {
    const myChartRef = chartRef.current.getContext('2d');
    if (typeof myLineChart !== 'undefined') myLineChart.destroy();
    myLineChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: 'plan for reading',
            data: data,
            borderColor: '#091E3F',
            tension: 0.3,
            order: 2,
            pointBorderWidth: 3,
            pointBackgroundColor: '#091E3F',
          },
          {
            label: 'Pages was reading',
            data: average,
            borderColor: '#FF6B08',
            tension: 0.3,
            order: 1,
            pointBorderWidth: 3,
            pointBackgroundColor: '#FF6B08',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            grace: '30%',
          },
        },
        layout: {
          padding: {
            left: 40,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            color: 'black',
            text: `AMOUNT OF PAGES / DAY  ${labels[1]}`,
            align: 'start',
            padding: {
              top: 10,
              bottom: 20,
            },
          },
        },
      },
    });
  }

  return (
    <ContainerChart>
      <canvas id="myChart" ref={chartRef} />
    </ContainerChart>
  );
};
export default LineGraph;
