let gameSeq=[];
let userSeq=[];
let started= false;
let level=0;
let btns=["yellow", "red", "purple", "green"];

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is staterd");
        started=true;
        levelUp();

    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");

    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");

    },250);

}
function levelUp(){
    userSeq=[];

    level++;
    h2.innerText=`Level ${level}`;

    let randInd= Math.floor(Math.random()*3);
    let randcol= btns[randInd];
    let randBtn= document.querySelector(`.${randcol}`);
    gameSeq.push(randcol);

    btnFlash(randBtn);

}

function checkAns(inx){

if(userSeq[inx]===gameSeq[inx]){
if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,1000);
}

}else{
    h2.innerHTML=`Game over! your score was <b>${level}</b> $Press any key  to start a game`;

    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();

}

}

function btnpress(){
 let btn= this;
userFlash(btn);
let usercol= btn.getAttribute("id");
userSeq.push(usercol);

checkAns(userSeq.length-1);

}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}



function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;

}