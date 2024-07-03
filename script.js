// Function to display current UTC time
function displayCurrentTimeUTC() {
    const now = new Date();
    const options = { timeZone: 'UTC', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.querySelector('[data-testid="currentTimeUTC"]').innerHTML = `<p>${timeString}</p>`;
}

// Function to display current day of the week
function displayCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = days[now.getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').innerHTML = `<p>${dayOfWeek}</p>`;
}

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentTimeUTC();
    displayCurrentDay();
});
