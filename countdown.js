(function () {
    const countdownContainer = document.querySelector('.countdown');
    const startTime = new Date();
    const limitSec = 5;



    const intervalId = setInterval(updateCountdown, 1000);
    
    function updateCountdown() {
        const currentTime = new Date();
        const intervalSec = Math.round((currentTime - startTime) / 1000);
        const leftSec = limitSec - intervalSec;
        countdownContainer.innerText = leftSec;
        if (leftSec <= 0) {

            
            clearInterval(intervalId);
        }
    }
    
})()