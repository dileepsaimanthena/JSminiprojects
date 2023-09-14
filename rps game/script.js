const cp = document.getElementById('cp');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const btncontainer = document.querySelector('.inpg')
const compsc = document.getElementById('Computer')
const playerc = document.getElementById('Player')
const img = ['paper.png', 'rock.png', 'scissors.png','rock.png','paper.png','scissors.png','rock.png','paper.png','scissors.png']
const comment = document.getElementById('comment');
const counter = document.getElementById('counter');
const start = document.getElementById('start')
const reset = document.getElementById('reset')
const startaudio = new Audio("media/start.wav")
const wonaudio = new Audio("media/won.wav")
const lostaudio = new Audio("media/lost.wav")
let startflag =0;
reset.addEventListener("click", ()=>{
    compsc.textContent =0
    playerc.textContent =0
    startflag =0
})
function counterdisplay(){
    counter.style.display = "flex";
    let count = 1; // Start counting from 1
    counter.innerText = count;

    const interval = setInterval(function () {
        count++;
        counter.innerText = count;

        if (count === 3) {
            clearInterval(interval); 
            setTimeout(function () {
                counter.style.display = "none";
            }, 1000);
        }
    }, 1000); // Count every second
}
start.addEventListener("click",()=>{
    if(!startflag){
        counterdisplay()
        startflag =1
        startaudio.play()
    }else{
        alert("The game has already started")
    }
})
btncontainer.addEventListener("click", (e) => {
    const clickedButton = e.target.closest('button'); // Find the closest button element
    if(!startflag){
        alert("Please start the game")
        return
    };
    if (!clickedButton) {
        
        return;
    }
    cp.src = 'media/'+ img[Math.floor(Math.random()*img.length)]
    switch (clickedButton.id) {
        case "rock":
            if(cp.src.includes('scissors.png')) {
                comment.textContent = "You won"
                
                wonaudio.play()
                playerc.textContent++
            }else if(cp.src.includes('paper.png')) {
                comment.textContent = "You Lost"
                compsc.textContent++
                lostaudio.play()
            }else{
                comment.textContent = "You got lucky bro"
            }
            setTimeout(function(){
                cp.src ='media/question.jpg'
            },1200)
            break;
        case "paper":
            if(cp.src.includes('scissors.png')) {
                comment.textContent = "You Lost"
                compsc.textContent++
                lostaudio.play()
            }else if(cp.src.includes('rock.png')) {
                comment.textContent = "You Won"
                playerc.textContent++
                wonaudio.play()
            }else{
                comment.textContent = "You got lucky bro"
            }
            setTimeout(function(){
                cp.src ='media/question.jpg'
            },1200)
            break;
        case "scissor":
            if(cp.src.includes('paper.png')) {
                comment.textContent = "You won"
                playerc.textContent++
                wonaudio.play()
            }else if(cp.src.includes('rock.png')) {
                comment.textContent = "You Lost"
                compsc.textContent++
                lostaudio.play()
            }else{
                comment.textContent = "You got lucky bro"
            }
            setTimeout(function(){
                cp.src ='media/question.jpg'
            },1200)
            break;
        default:
            break;
    }
});

