const replaceImagesOrText = () => {
  let images = document.body.getElementsByTagName("img")
  if(images.length===0){
    window.location.reload()
  }
  for (let i=images.length-1; i>=0; i--){
    let image = images[i]
    if (image.alt){
      let text=document.createTextNode(image.alt);
      image.parentNode.replaceChild(text,image)
    }
  }
}

const replaceBtn = document.getElementById("replace-button")

replaceBtn.addEventListener("click", replaceImagesOrText)