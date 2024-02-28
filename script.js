// Set the date for the end of the giveaway
const giveawayDate = new Date("2024-03-01T00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = giveawayDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

  // If the countdown is over, display a message and clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Giveaway is over!";
  }
}, 1000);
