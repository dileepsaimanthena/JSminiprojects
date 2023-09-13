const obj = document.querySelector(".container")
const btn = document.getElementById("btn")
const txt = document.getElementById("colortxt")
const clip = document.querySelector("i")
const simpleColorKeywords = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
  "cyan"
];
btn.addEventListener("click", function() {
  i = Math.floor(Math.random()*simpleColorKeywords.length)
  obj.style.backgroundColor = simpleColorKeywords[i]
  txt.textContent = simpleColorKeywords[i]
  txt.style.color = simpleColorKeywords[i]
  clip.className ="bi bi-clipboard"
})
clip.addEventListener("click", function() {
  navigator.clipboard.writeText(txt.textContent)
  clip.className = "bi bi-clipboard-check"
})