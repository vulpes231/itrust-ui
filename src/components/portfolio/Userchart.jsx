import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getUserEarnings } from "../../features/tradeSlice";
import { getAccessToken } from "../../constants";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register the components you use
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement
);

const Userchart = ({ darkMode }) => {
  const dispatch = useDispatch();
  const [earningsData, setEarningsData] = useState({ labels: [], data: [] });

  const { earnings } = useSelector((state) => state.trade);
  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserEarnings());
    }
  }, [accessToken]);

  useEffect(() => {
    if (earnings) {
      const labels = earnings?.labels;
      const data = earnings?.data;
      setEarningsData({ labels, data });
    }
  }, [earnings]);

  const data = {
    labels: earningsData.labels,
    datasets: [
      {
        label: "Earnings (Thousand)",
        data: earningsData.data,
        borderColor: !darkMode ? "white" : "black", // Line color based on dark mode
        backgroundColor: !darkMode
          ? "rgba(255, 255, 255, 0.2)" // Background color under the line in dark mode
          : "rgba(0, 0, 0, 0.2)", // Background color under the line in light mode
        borderWidth: 2, // Line width
        tension: 0.1, // Line tension for smooth curves
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw}K`, // Tooltip label formatting
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: !darkMode
            ? "rgba(255, 255, 255, 0.2)" // Grid line color in dark mode
            : "rgba(0, 0, 0, 0.2)", // Grid line color in light mode
        },
        ticks: {
          color: !darkMode ? "white" : "black", // X-axis label color
        },
      },
      y: {
        grid: {
          color: !darkMode
            ? "rgba(255, 255, 255, 0.2)" // Grid line color in dark mode
            : "rgba(0, 0, 0, 0.2)", // Grid line color in light mode
        },
        ticks: {
          color: !darkMode ? "white" : "black", // Y-axis label color
        },
      },
    },
    maintainAspectRatio: false, // Prevent chart resizing issues
  };

  return (
    <div className={`p-6 rounded-lg ${darkMode ? "bg-white" : "bg-black"}`}>
      <div className="flex justify-between items-center">
        <h3 className={`capitalize font-medium text-lg `}>
          My Portfolio Statistics
        </h3>
        {/* Add buttons for time periods if needed */}
      </div>
      <div className="relative h-80">
        {/* Adjust height as needed */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Userchart;
