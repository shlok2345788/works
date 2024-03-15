const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  startTime = Date.now(); // Get the current timestamp
  intervalId = setInterval(updateTime, 10); // Update time every 10 milliseconds
  startBtn.disabled = true; // Disable start button
  stopBtn.disabled = false; // Enable stop button
}

function stopTimer() {
  clearInterval(intervalId); // Clear the interval
  elapsedTime += Date.now() - startTime; // Add elapsed time
  startBtn.disabled = false; // Enable start button
  stopBtn.disabled = true; // Disable stop button
}

function resetTimer() {
  clearInterval(intervalId); // Clear the interval
  elapsedTime = 0;
  display.textContent = '00:00:00.000';
  startBtn.disabled = false; // Enable start button
  stopBtn.disabled = true; // Disable stop button
}

function updateTime() {
  const currentTime = elapsedTime + Date.now() - startTime;
  const milliseconds = Math.floor((currentTime % 1000) / 10).toString().padStart(3, '0');
  const seconds = Math.floor((currentTime / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((currentTime / (1000 * 60)) % 60).toString().padStart(2, '0');
  const hours = Math.floor((currentTime / (1000 * 60 * 60))).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
