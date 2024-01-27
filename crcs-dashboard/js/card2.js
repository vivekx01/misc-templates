// Card 2 - Top Sector Trends
const sectorChartElement = document.getElementById("sectorChart");
const sectorLabels = Array.from(new Set(dummyData.map((data) => data.sectorType)));
const sectorCounts = sectorLabels.map(
  (sector) => dummyData.filter((data) => data.sectorType === sector).length
);

new Chart(sectorChartElement, {
  type: "doughnut",
  data: {
    labels: sectorLabels,
    datasets: [
      {
        data: sectorCounts,
        backgroundColor: [
          "rgba(255, 0, 0, 1)",        // Red
          "rgba(0, 255, 0, 1)",        // Green
          "rgba(0, 0, 255, 1)",        // Blue
          "rgba(255, 255, 0, 1)",      // Yellow
          "rgba(255, 0, 255, 1)",      // Magenta
          "rgba(0, 255, 255, 1)",      // Cyan
          "rgba(255, 165, 0, 1)",      // Orange
          "rgba(128, 0, 128, 1)",      // Purple
          "rgba(0, 128, 0, 1)",        // Dark Green
          "rgba(128, 0, 0, 1)",        // Maroon
          "rgba(0, 128, 128, 1)",      // Teal
          "rgba(255, 192, 203, 1)",    // Pink
          "rgba(165, 42, 42, 1)",      // Brown
          "rgba(255, 255, 224, 1)",    // Light Yellow
          "rgba(0, 255, 127, 1)",      // Spring Green
          "rgba(255, 105, 180, 1)",    // Hot Pink
          "rgba(184, 134, 11, 1)",     // Dark Goldenrod
          "rgba(255, 69, 0, 1)",       // Orange Red
          "rgba(218, 112, 214, 1)",    // Orchid
          "rgba(46, 139, 87, 1)"       // Sea Green
        ]
      },
    ],
  },
});