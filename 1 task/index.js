const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    return (seconds) => {

        const timer = setInterval(() => {
            let second = seconds % 60
            let minute = seconds / 60 % 60
            let hour = seconds / 60 / 60 % 60

            if (seconds <= 0) {
                clearInterval(timer)
                alert("Время истекло")
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minute)}:${second}`
                timerEl.innerHTML = strTimer
            }
            --seconds;
        }, 1000)

    }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/[^\d]/g, '')
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});
