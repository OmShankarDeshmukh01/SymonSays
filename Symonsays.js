let gameseq = [];
let userseq = [];
let btns = ["red" , "pink" , "yellow" , "brown"];

let start = false;
let level = 0;
let h2 = document.querySelector("#one");
let h22 = document.querySelector("#two");
let highscore = 0;

document.addEventListener("keypress" , function(){
    if(start == false)
    console.log("game started");
    start = true;
    levelup();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    } , 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    } , 250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 3)+1;
    let randomcolor =btns[random];
    let rbtn =document.querySelector(`.${randomcolor}`);
    btnflash(rbtn);
    gameseq.push(randomcolor);
    console.log(gameseq);

    if(highscore < level){
        highscore = level;
    }
    h22.innerText = (`High Score : ${highscore}`);

}
function checkans(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup , 1000);
        }
    }
    else{
        h2.innerHTML = `GAME OVER ! <b>Your Score was ${level}</b> <br> Press any key to start `  ; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "gray";
        } , 500);
        reset();
    }
    
} 

function btnpress(){
    let btn =this;
    userflash(btn);
   let userColor = btn.getAttribute("id");
   userseq.push(userColor);
   checkans(userseq.length-1);
   
}
let allbtn =document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" , btnpress);
}

function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}