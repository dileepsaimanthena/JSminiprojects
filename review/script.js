const reviews = [
    {
        id:1,
        name: 'Eren Yeager',
        profile:"media/eren.png",
        review: "Expect ample twists and turns in this tale of desi Robin Hood and his tech-savvy, gun-wielding angels. Jawan is peppered with meta and pop culture references. You will be reminded of Money Heist, Squid Game, The Dark Knight Rises, old Hindi songs and The Lion King but topping it all, is a heady mix of SRK-Atlee tadka."
    },
    {
        id:2,
        name: 'Naruto',
        profile:"https://wallpapers.com/images/high/naruto-profile-pictures-392d311ouj6b7ggq.webp",
        review: "Jawan feeds off SRK's stardom. It isn't intimidated by him.Like a paisa vasool desi thaali, it has all kinds of flavour to satiate your taste buds. The reincarnation of 'action hero SRK' hits the sweet spot."
    },
    {
        id:3,
        name: 'Luffy',
        profile:'https://wallpapers.com/images/high/serious-luffy-anime-profile-sv5n8n4fb1nmrkdy.webp',
        review:"ABSOLUTELY ONE OF THE WORST MOVIES I HAVE EVER SEEN!! BAKWAAS IN EVERY WAY - ESPECIALLY ACTING... DIRECTOR DID NOT EXPLOIT THE ACTORS' TALENTS.FIRST TIME EVER AFTER THE WHOLE THEATER AUDIENCE EXPRESSED WANTING THEIR MONEY BACK!! COULDN'T AGREE MORE!!!..."
    },
    {
        id:4,
        name: 'Zoro',
        profile:'https://wallpapers.com/images/high/bounty-hunter-roronoa-zoro-pfp-2jsu5qdtqotra8q7.webp',
        review:"Honestly, it was an absurd movie with a lousy script. Don't know why your writer is gushing about it and gave it a 3.5 rating. In comparison, Ajay Devgan's Bholaa had more technical finesse...."
    },
    {
        id:5,
        name:'Sanji',
        profile:'https://wallpapers.com/images/high/chef-vinsmoke-sanji-0nfit9rrpjximvkr.webp',
        review:"I will call this movie the best of king khan career. Its a mass family entertainer and if you are reading this review then please don't hesitate a bit and go for it ,you will not regret watching this movie.if you are a genuine movie lover than this movie is definitely for you...."
    }
];

const right = document.getElementById('right');
const left = document.getElementById('left');
const surp = document.getElementById('surp');
let index = 0;
let person = 0;
const img = document.getElementById('img')
const pname = document.querySelector('h4')
const txt = document.querySelector('.text')

window.addEventListener("DOMContentLoaded",function(){
    currentperson(person)
})
function currentperson(person){
    const item = reviews[person]
    img.src = item.profile;
    pname.textContent = item.name
    txt.innerText = item.review
}
right.addEventListener("click",function(){
    if(index<reviews.length-1){
        index++;
        currentperson(index)
    }
    else{
        index = 0
        currentperson(index)
    }
})
left.addEventListener("click",function(){
    if(index>0){
        index--;
        currentperson(index)
    }else{
        index = reviews.length-1
        currentperson(index)
    }
})
surp.addEventListener("click",function(){
    index = Math.floor(Math.random()*reviews.length)
    currentperson(index)
})