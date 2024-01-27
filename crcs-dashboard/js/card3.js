// Card 3 - Top State Trends
const stateChartElement = document.getElementById("stateChart");
const state1Labels = Array.from(new Set(dummyData.map((data) => data.state)));
console.log(state1Labels);
const stateCounts = state1Labels.map(
  (state) => dummyData.filter((data) => data.state === state).length
);

// Generate an array of different colors for each state
const colorPalette = [
  "#3F51B5", "#4CAF50", "#FF5722", "#607D8B", "#F44336", "#2196F3",
  "#CDDC39", "#FFC107", "#607D8B", "#4CAF50", "#9C27B0", "#F44336",
  "#FF6384", "#36A2EB", "#FFCE56", "#8BC34A", "#E91E63", "#9C27B0",
  "#FF9800", "#9E9E9E", "#795548", "#673AB7", "#009688", "#FFEB3B",
  "#00BCD4", "#FF9800", "#3F51B5", "#FF5722"
];

// If there are more than 28 states, you can repeat colors from the palette
const backgroundColors = stateCounts.map((_, index) => colorPalette[index % colorPalette.length]);

new Chart(stateChartElement, {
  type: "bar",
  data: {
    labels: state1Labels,
    datasets: [
      {
        label: "Number of Societies",
        data: stateCounts,
        backgroundColor: backgroundColors,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        maxRotation: 45, // Adjust the rotation angle of x-axis labels
        minRotation: 45, // Adjust the rotation angle of x-axis labels
        autoSkip: false, // Prevent automatic skipping of labels
      },
      y: {
        ticks: {
          stepSize: 1, // Ensure y-axis ticks are displayed as integers
        },
      },
    },
  },
});