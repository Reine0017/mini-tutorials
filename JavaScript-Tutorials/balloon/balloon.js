let balloon = document.getElementById("balloon")
let explosion = document.getElementById("explosion")

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event;

  if(balloon.offsetWidth >= 400){
    console.log("boom")
    balloon.remove()
    explosion.removeAttribute("hidden")
  }

  if (e.keyCode == '38') {
      // up arrow
      console.log("up")
      balloon.style.width = balloon.offsetWidth + 10 + "px"
      console.log(balloon.offsetWidth)
  }
  else if (e.keyCode == '40') {
      // down arrow
      balloon.style.width = balloon.offsetWidth - 10 + "px"

  }
}