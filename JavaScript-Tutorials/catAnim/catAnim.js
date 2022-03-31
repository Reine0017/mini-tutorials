let cat = document.getElementById("cat")
let hat = document.getElementById("hat")
let angle = Math.PI / 2

function animate(time, lastTime){
  if (lastTime!=null){
    angle += (time - lastTime) * 0.001
  }

  cat.style.top = (Math.sin(angle) * 200) + "px"
  cat.style.left = (Math.cos(angle) * 200) + "px"

  hat.style.top = (-Math.sin(angle)* 200) + "px"
  hat.style.left = (-Math.cos(angle) * 200) + "px"
  requestAnimationFrame(newTime => animate(newTime, time))
}

requestAnimationFrame(animate)