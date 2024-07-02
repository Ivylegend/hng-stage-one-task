const currentTimeUTC = document.getElementById("currentTimeUTC");
const currentDay = document.getElementById("currentDay");

const updateDateTime = () => {
  const date = new Date();
  currentTimeUTC.textContent = date.toLocaleTimeString('en-US', { timeZone: 'UTC' }); // Use timeZone: 'UTC'
  currentDay.textContent = date.toLocaleDateString("en-US", { weekday: 'long' });
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
