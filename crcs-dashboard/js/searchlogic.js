// Function to populate the table with data
function populateTable(data) {
    const tableBody = document.getElementById("searchResults");
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
      const row = document.createElement("tr");

      const srNoCell = document.createElement("td");
      srNoCell.textContent = index + 1;
      row.appendChild(srNoCell);

      Object.values(item).forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  }

  // Display all data initially
  populateTable(dummyData);

  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
  
    searchButton.addEventListener("click", function () {
      const searchText = searchInput.value.trim().toLowerCase();
      const filteredData = dummyData.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchText)
      );
  
      populateTable(filteredData);
    });
  });
  