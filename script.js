const first = document.getElementById('first');
const last = document.getElementById('last');

const showTime = () => {

    let time = new Date();
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');

    if (hours > 12) {
        hours -= 12;
        first.textContent = `${hours}:${minutes}:${seconds} AM`;
        last.textContent = `${hours}:${minutes}:${seconds} AM`;
    }
    first.textContent = `${hours}:${minutes}:${seconds} PM`;
    last.textContent = `${hours}:${minutes}:${seconds} PM`;
}

setInterval(showTime, 1000);
