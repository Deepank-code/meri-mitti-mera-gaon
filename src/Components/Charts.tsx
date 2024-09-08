import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  ArcElement,
  ChartData,
  ChartOptions,
} from "chart.js";
import { BsDisplay } from "react-icons/bs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}
const months = ["january", "february", "march", "april", "may", "june", "july"];

export const BarChart = ({
  data_1,
  data_2,
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,

  horizontal = false,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,

        text: "Chart js bar chart",
      },
    },
  };
  const barChartdata: ChartData<"bar", number[], string> = {
    labels: labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        categoryPercentage: 0.4,
        barPercentage: 1,
        borderWidth: 1,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        categoryPercentage: 0.4,
        barPercentage: 1,
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={barChartdata} />;
};
interface DoughnutChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};
