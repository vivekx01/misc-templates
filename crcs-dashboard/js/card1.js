// Card 1 - Total Societies and Recent Registrations
document.getElementById("totalSocieties").textContent = dummyData.length;
  
const recentRegistrationsElement = document.getElementById("recentRegistrations");
dummyData.slice(0, 8).forEach((data) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.textContent = data.societyName;
  recentRegistrationsElement.appendChild(listItem);
});