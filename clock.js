function udateClock() {
    const clockContainer = document.querySelector('.clock')
    clockContainer.textContent = new Date().toLocaleTimeString()
}
setInterval(udateClock, 1000)