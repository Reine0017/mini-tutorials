const timerBtnHandler = () => {
  let time = parseInt(prompt("Enter countdown seconds"),10)
  const paragraph = document.createElement("p")
  paragraph.textContent = "BEGIN COUNTDOWN"
  document.body.appendChild(paragraph)

  const countdownPara = document.getElementById('timer-countdown')

  console.log(time, typeof(time))
  var timer = setInterval(()=>{
    paragraph.remove()
    countdownPara.textContent = time
    time--
    if(time<0){
      clearInterval(timer)
      countdownPara.textContent=""
      const paragraph = document.createElement('p')
      paragraph.textContent = "COUNTDOWN FINISHED"
      document.body.appendChild(paragraph);
    }
  }, 1000)
}

const timerBtn = document.querySelector(".start-timer")
timerBtn.addEventListener("click",timerBtnHandler)