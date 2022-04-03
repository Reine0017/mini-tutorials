// let button = document.querySelector("button")

// const once = () => {
//   console.log("Done")
//   button.removeEventListener("click", once)
// }

// button.addEventListener("click", once)

// button.addEventListener("mousedown", event => {
//   if(event.button==0){
//     console.log("Left")
//   } else if(event.button==1){
//     console.log("middle")
//   } else if(event.button==2){
//     console.log("right")
//   }
// })

let lastX
let bar = document.querySelector("div")

bar.addEventListener("mousedown", event => {
  console.log("mousedown")
  if (event.button == 0){
    console.log(event.clientX)
    lastX = event.clientX
    window.addEventListener("mousedown", moved)
    event.preventDefault()
  }
})

function moved(event){
  if(event.buttons == 0){
    console.log("removed")
    window.removeEventListener("mousemove", moved)
  } else {
    let dist = event.clientX - lastX
    let newWidth =  Math.max(10, bar.offsetWidth + dist)
    console.log(newWidth)
    bar.style.width = newWidth + "px"
    lastX = event.clientX
  }
}