const hex = [0, 1, 2,3, 4,5,6,7, 8, 9, "A","B","C","D","E","F"]
const obj = document.querySelector(".container")
const btn = document.getElementById("btn")
const txt = document.getElementById("colortxt")
const clip = document.querySelector("i")
btn.addEventListener("click",function(){
  
  code = "#"
  for(i=0;i<6;i++){
    k = Math.floor(Math.random()*hex.length)
    code+= hex[k]
  }
  obj.style.backgroundColor = code
  txt.textContent = code
  txt.style.color = code
  clip.className ="bi bi-clipboard"
})
clip.addEventListener("click", function() {
  navigator.clipboard.writeText(txt.textContent)
  clip.className = "bi bi-clipboard-check"
})