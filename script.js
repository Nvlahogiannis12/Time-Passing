let count = 0;
let countMinute = 0;
let countHour = 0;
let countDay = 0;

let audio = new Audio("Jono- Please Hold.mp3");
  audio.loop = true;
  audio.play();
const timer = setInterval(() => {
  count++;
  document.getElementById("counter").innerText = `Seconds passed: ${count}`;

  if (count % 60 === 0) {
    countMinute++;
    document.getElementById(
      "minuteCounter"
    ).innerText = `Minutes passed: ${countMinute}`;

    if (countMinute % 60 === 0) {
      countHour++;
      countMinute = 0; // reset minutes after an hour
      document.getElementById(
        "hourCounter"
      ).innerText = `Hours passed: ${countHour}`;

      if (countHour % 24 === 0) {
        countDay++;
        countHour = 0;
        document.getElementById(
          "dayCounter"
        ).innerText = `Days passed: ${countDay}`;
      }
    }
  }

  if (count >= 9999999999) {
    clearInterval(timer);
  }
}, 1000);
