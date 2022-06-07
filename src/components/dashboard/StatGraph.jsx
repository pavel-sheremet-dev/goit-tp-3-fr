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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const StatGraph = ({ responce }) => {
  const [labelsQuantity, setlabelsQuantity] = useState(0);
  const pageFormat = useContext(PageFormatContext);
  const { results, deadlineDate, startDate, totalPages } = responce;

  useEffect(() => {
    switch (true) {
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
    () => getNormalizeResults(results),
    [results],
  );

  console.log(normalizeResults);

  const plan = useMemo(
    () => getPlanValues(startDate, deadlineDate, totalPages, normalizeResults),
    [deadlineDate, normalizeResults, startDate, totalPages],
  );

  const points = normalizeResults.map(p => p.pointResult);
  const maxPoint = Math.max(...points, plan[0]);
  const normalizeLabels = normalizeResults.map(p => p.date);

  return (
    <Line
      options={getOptions(normalizeResults, maxPoint, labelsQuantity)}
      data={getData(plan, points, normalizeLabels)}
    />
  );
};

export default StatGraph;
