const createConfetti = () => {
  if(document.querySelector("p")){
    document.querySelector(".confettiButton").textContent = "Click me for confetti!"
    document.querySelector("p").remove()
    return
  }
  const para = document.createElement('p');
  para.textContent = "You've clicked the confetti button!";
  document.body.appendChild(para);
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()
  document.querySelector(".confettiButton").textContent = "Hide Words"
}

const confettiBtn = document.querySelector(".confettiButton")

confettiBtn.addEventListener("click",createConfetti)