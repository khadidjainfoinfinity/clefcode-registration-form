document.addEventListener('DOMContentLoaded', function () {
    var shineElement = document.getElementById('shine');

    // Set the countdown end date and time
    var countdownEndDate = new Date('2024-03-01T23:59:59');//insert the date that U want here

    function updateCounter() {
      var now = new Date();
      var timeDifference = countdownEndDate - now;

      // Calculate hours, minutes, and seconds
      var hours = Math.floor(timeDifference / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown within the "shine" div
      shineElement.innerHTML = `<span id="hours">${hours < 10 ? '0' + hours : hours}</span> :
                                    <span id="minutes">${minutes < 10 ? '0' + minutes : minutes}</span> :
                                    <span id="seconds">${seconds < 10 ? '0' + seconds : seconds}</span>`;

      // Check if the countdown has reached zero
      if (timeDifference <= 0) {
        clearInterval(timerInterval); // Stop the countdown when it reaches zero
        shineElement.innerHTML = 'Countdown Expired';
           shineElement.style.fontSize="3.5vw";
      }
    }

    // Update the countdown every second
    var timerInterval = setInterval(updateCounter, 1000);
  });
