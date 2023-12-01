console.log("welcome to TicTacToe");
// let music = new Audio("./images and music/music.mp3");
let audioTurn = new Audio("./images and music/ting.mp3");
let turn="X"
let gameOver = false;

const changeTurn = ()=>{
    return turn==="X"?"O":"X"
}

const checkWin = ()=>{
    let boxtext= document.getElementsByClassName('boxtext');

    let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!==""){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
            gameOver=true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
let boxArr=Array.from(boxes);
boxArr.forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            // console.log(changeTurn());
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
});


let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    gameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
})