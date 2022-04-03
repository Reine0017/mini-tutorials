document.body.appendChild(document.createTextNode("jkjfkjen rkj j kaj jkf jek fjak ekj krj loremipsum ".repeat(1000)))

let bar = document.querySelector("#progress")
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${(scrollY / max ) * 100}%`
})