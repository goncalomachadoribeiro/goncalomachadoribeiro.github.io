const countdown = document.getElementById("countdown");

// 22 março 2028 às 10:00
const targetDate = new Date(2028, 2, 22, 10, 0, 0);

function update() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.textContent = "CHEGOU!";
    return;
  }

  const total = Math.floor(diff / 1000);

  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  countdown.textContent =
    `${String(days).padStart(3, "0")}:` +
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

update();
setInterval(update, 1000);
