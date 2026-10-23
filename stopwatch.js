let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time / 60000) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor((time % 1000) / 10);

    // Ensure double digits
    let pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('display').textContent = formatTime(elapsedTime);
        }, 10); // Update every 10ms for smooth milliseconds
        
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        timerInterval = null;
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    timerInterval = null;
    isRunning = false;
    document.getElementById('display').textContent = "00:00:00";
}