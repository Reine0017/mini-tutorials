const countdownBtnClicked = (event) => {
  //console.log("clicked", event.target.value)
  // const paragraph = document.querySelector("p")
  // paragraph.textContent=`Countdown clicked: ${event.target.value}`
  
  let countdownSeconds = event.target.value
  const countdownPara = document.getElementById('timer-countdown')
  countdownPara.textContent = countdownSeconds
  var timer = setInterval(() => {
        countdownSeconds--;
        countdownPara.textContent = countdownSeconds
        if (countdownSeconds<0) {
            clearInterval(timer);
            countdownPara.textContent = ""
            // const jsConfetti = new JSConfetti()
            // jsConfetti.addConfetti()

            const paragraph = document.createElement('p')
            paragraph.textContent = "COUNTDOWN FINISHED"
            document.body.appendChild(paragraph);
            
        }
    }, 1000);
}

const countdownButtons = document.querySelectorAll("button")

for (const button of countdownButtons){
  button.addEventListener("click", countdownBtnClicked)
}