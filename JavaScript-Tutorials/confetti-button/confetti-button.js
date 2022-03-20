const createConfetti = () => {
  const confettiBtn = document.querySelector(".confettiButton")
  const words = document.querySelector("p")
  if(words){
    confettiBtn.textContent = "Click me for confetti!"
    confettiBtn.style.backgroundColor = "aquamarine"
    words.remove()
    return
  }
  const para = document.createElement('p');
  para.textContent = "You've clicked the confetti button!";
  document.body.appendChild(para);
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()
  
  confettiBtn.textContent = "Hide Words"
  confettiBtn.style.backgroundColor = "skyblue"
}

const confettiBtn = document.querySelector(".confettiButton")

confettiBtn.addEventListener("click",createConfetti)