import { useContext, useEffect, useState, useMemo } from 'react';
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
import { PageFormatContext, format } from 'context/pageFormatContext';
import {
  getData,
  getNormalizeResults,
  getOptions,
  getPlanValues,
} from 'helpers/chartService';
import { ChartContainer } from './Dashboard.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const StatGraph = ({ responce, getReadingPlan }) => {
  const [labelsQuantity, setlabelsQuantity] = useState(0);
  const [plan, setPlan] = useState([]);
  const pageFormat = useContext(PageFormatContext);
  const { results, deadlineDate, startDate, totalPages } = responce;

  useEffect(() => {
    switch (true) {
      case pageFormat === format.response:
        setlabelsQuantity(3);
        break;
      case pageFormat === format.mobile:
        setlabelsQuantity(3);
        break;
      case pageFormat === format.tablet:
        setlabelsQuantity(6);
        break;
      case pageFormat === format.desktop:
        setlabelsQuantity(7);
        break;
      default:
        break;
    }
  }, [pageFormat]);

  const normalizeResults = useMemo(
    () => getNormalizeResults(results, startDate),
    [results, startDate],
  );

  useEffect(() => {
    setPlan(getPlanValues(deadlineDate, totalPages, normalizeResults));
  }, [deadlineDate, normalizeResults, totalPages]);

  useEffect(() => {
    getReadingPlan(plan[plan.length - 1]);
  }, [getReadingPlan, plan]);

  const points = normalizeResults.map(p => p.pointResult);
  const maxPoint = Math.max(...points, ...plan);
  const normalizeLabels = normalizeResults.map(p => p.date);

  return (
    <ChartContainer>
      <Line
        options={getOptions(normalizeResults, maxPoint, labelsQuantity)}
        data={getData(plan, points, normalizeLabels)}
      />
    </ChartContainer>
  );
};

export default StatGraph;
