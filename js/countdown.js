            // Set the date we're counting down to
            var countDownDate = new Date("Apr 3, 2020 18:30:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

              // Get today's date and time
              var now = new Date().getTime();

              // Find the distance between now and the count down date
              var distance = countDownDate - now;

              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);

              // Display the result in the element with id="demo"
              var daysUnit = days;
              var hoursUnit = hours;
              var minutesUnit = minutes;
              var secondsUnit = seconds;

              if(days == 0 || days == 1 || days == 2 || days == 3 || days == 4 || days == 5 || days == 6 || days == 7 || days == 8 || days == 9) {
                var daysUnit = "0"+days;
              }
              if(hours == 0 || hours == 1 || hours == 2 || hours == 3 || hours == 4 || hours == 5 || hours == 6 || hours == 7 || hours == 8 || hours == 9) {
                var hoursUnit = "0"+hours;
              }
              if(minutes == 0 || minutes == 1 || minutes == 2 || minutes == 3 || minutes == 4 || minutes == 5 || minutes == 6 || minutes == 7 || minutes == 8 || minutes == 9) {
                var minutesUnit = "0"+minutes;
              }
              if(seconds == 0 || seconds == 1 || seconds == 2 || seconds == 3 || seconds == 4 || seconds == 5 || seconds == 6 || seconds == 7 || seconds == 8 || seconds == 9) {
                var secondsUnit = "0"+seconds;
              }

              document.getElementById("demo").innerHTML = daysUnit + " " + hoursUnit + " " + minutesUnit + " " + secondsUnit + " ";

              // If the count down is finished, write some text
              if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
              }
            }, 1000);
