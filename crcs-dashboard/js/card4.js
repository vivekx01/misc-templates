// Card 4 - Top District Trends
const districtSelectElement = document.getElementById("districtSelect");
const stateSelectElement = document.getElementById("stateSelect");
const districtChartElement = document.getElementById("districtChart");
const districtTotalElement = document.getElementById("districtTotal");

stateSelectElement.addEventListener("change", updateDistrictOptions);
districtSelectElement.addEventListener("change", updateDistrictChart);

function updateDistrictOptions() {
  const selectedState = stateSelectElement.value;
  const districts = Array.from(
    new Set(dummyData.filter((data) => data.state === selectedState).map((data) => data.district))
  );

  // Add "Not Known" option if district value is blank
  if (!districts.includes("")) {
    districts.unshift("");
  }

  populateOptions(districtSelectElement, districts);
  updateDistrictChart();
}

function updateDistrictChart() {
  const selectedState = stateSelectElement.value;
  const selectedDistrict = districtSelectElement.value;

  // Filter data based on selected state and district
  const filteredData = dummyData.filter(
    (data) => data.state === selectedState && data.district === selectedDistrict
  );

  const sectorLabels = Array.from(new Set(filteredData.map((data) => data.sectorType)));
  const sectorCounts = sectorLabels.map(
    (sector) => filteredData.filter((data) => data.sectorType === sector).length
  );

  // Clear previous chart if it exists
  if (districtChartElement.chart) {
    districtChartElement.chart.destroy();
  }

  const chartWidth = 300; // Custom width for the chart
  const chartHeight = 300; // Custom height for the chart

  districtChartElement.style.width = chartWidth + "px";
  districtChartElement.style.height = chartHeight + "px";

  const chartContext = districtChartElement.getContext("2d");
  chartContext.clearRect(0, 0, chartWidth, chartHeight);

  districtChartElement.chart = new Chart(chartContext, {
    type: "doughnut", // Set chart type to "pie"
    data: {
      labels: sectorLabels,
      datasets: [
        {
          label: "Number of Societies",
          data: sectorCounts,
          backgroundColor: [
            "#3F51B5", "#4CAF50", "#FF5722", "#607D8B", "#F44336", "#2196F3",
            "#CDDC39", "#FFC107", "#607D8B", "#4CAF50", "#9C27B0", "#F44336",
            "#FF6384", "#36A2EB", "#FFCE56", "#8BC34A", "#E91E63", "#9C27B0",
            "#FF9800", "#9E9E9E", "#795548", "#673AB7", "#009688", "#FFEB3B",
            "#00BCD4", "#FF9800", "#3F51B5", "#FF5722"
            // Add more colors if needed
          ],
        },
      ],
    },
    options: {},
  });

  districtTotalElement.textContent = filteredData.length;
  const areaOfOperationListElement = document.getElementById("areaOfOperationList");
  areaOfOperationListElement.innerHTML = "";

  // Get unique area of operation places
  const areaOfOperationPlaces = new Set(); // Using a Set to store unique places

  // Iterate over filtered data and extract places
  filteredData.forEach((data) => {
    const places = data.areaOfOperation.split(","); // Split the string by comma
    places.forEach((place) => {
      const trimmedPlace = place.trim(); // Remove leading/trailing whitespace
      if (trimmedPlace !== "") {
        areaOfOperationPlaces.add(trimmedPlace); // Add unique places to the set
      }
    });
  });

  // Populate the area of operation places list
  areaOfOperationPlaces.forEach((place) => {
    const listItem = document.createElement("li");
    listItem.textContent = place;
    areaOfOperationListElement.appendChild(listItem);
  });
}
// Initial population of state and district options
const stateLabels = Array.from(new Set(dummyData.map((data) => data.state)));
populateOptions(stateSelectElement, stateLabels);
updateDistrictOptions();

function populateOptions(selectElement, options) {
  selectElement.innerHTML = "";
  const districtOptions = options.filter(option => option !== ""); // Exclude blank values
  districtOptions.forEach((option) => {
    console.log("District Option:", option);
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
  
  // Check if any option has a blank district value
  const hasBlankDistrict = districtOptions.includes("");

  console.log("Has Blank District:", hasBlankDistrict);

  if (hasBlankDistrict) {
    const notKnownOption = document.createElement("option");
    notKnownOption.textContent = "Not Known";
    selectElement.appendChild(notKnownOption);
  }
}
