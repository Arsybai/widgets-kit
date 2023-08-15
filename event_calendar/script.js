const daysContainer = document.querySelector(".days");

function generateCalendarDays() {
  const daysInMonth = 31; // Example: August has 31 days
  daysContainer.innerHTML = "";

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("day");

    if (day === 15) {
      dayElement.classList.add("event-day");
    }

    daysContainer.appendChild(dayElement);
  }
}

generateCalendarDays();
