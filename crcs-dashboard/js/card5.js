// Card 5 - Registration Trends
const yearSelectElement = document.getElementById("yearSelect");
const registrationChartElement = document.getElementById("registrationChart");

yearSelectElement.addEventListener("change", updateRegistrationChart);

let chart = null;

function updateRegistrationChart() {
  const selectedYear = yearSelectElement.value;
  const monthlyCounts = Array.from({ length: 12 }, () => 0);

  dummyData.forEach((data) => {
    if (data.dateOfRegistration && data.dateOfRegistration !== "") {
      const registrationDate = new Date(data.dateOfRegistration);
      if (registrationDate.getFullYear() === parseInt(selectedYear)) {
        monthlyCounts[registrationDate.getMonth()]++;
      }
    }
  });

  // Calculate the maximum count and add a small buffer
  const maxCount = Math.max(...monthlyCounts) + 1;

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(registrationChartElement, {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Number of Registrations",
          data: monthlyCounts,
          borderColor: "#DC143C",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          max: maxCount,
        },
      },
    },
  });
}


// Populate year options
const years = Array.from(
  new Set(dummyData.map((data) => new Date(data.dateOfRegistration).getFullYear()))
);
populateOptionsc5(yearSelectElement, years);
updateRegistrationChart();
function populateOptionsc5(selectElement, options) {
    options.forEach((option) => {
      if (!isNaN(option)) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        selectElement.appendChild(optionElement);
      }
    });
  }
  
  