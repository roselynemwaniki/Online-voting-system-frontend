import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchResults } from "../utils/api";

function ResultsChart() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults().then(setResults);
  }, []);

  const chartData = {
    labels: results.map((r) => r.name),
    datasets: [
      {
        label: "Votes",
        data: results.map((r) => r.votes),
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Election Results</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default ResultsChart;
