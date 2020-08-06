//variables
var buttonArr = []
var randomNum = []
var tryAgainBtn = document.getElementById('tryAgainId');
var menuBtn = document.getElementById('menuId');
var button = document.getElementById('buttons');
var difficulty = document.getElementById('_difficulty')
let checkNumArr = []
let checkBtnArr = []
var count = 0;
var sec = 0; 
var numbers = ['1', '2', '3', '4','1', '2', '3', '4',]
var pressed = false
var btnNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
var safeBtnArr = [];



function done(){
if(difficulty.className == 'medium'){
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8']
    for (i=1; i<17; i++) {
        buttonArr.push(document.getElementById('b'+i));
        safeBtnArr.push(document.getElementById('b'+i));
        randomNum.push(numbers[Math.floor(Math.random() * numbers.length )]) 
        removeNum(randomNum[i-1])
        var done = true
    }
    if(done == true){
        for(i=0;i<buttonArr.length; i++){
            buttonArr[i].hidden = ''
        }
    }

} else if(difficulty.className == 'hard'){
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8',  '9',  '10', '11', '12','1', '2', '3', '4', '5', '6', '7', '8',  '9',  '10', '11', '12']
    for (i=1; i < 25; i++) {
        buttonArr.push(document.getElementById('b'+i));
        safeBtnArr.push(document.getElementById('b'+i));
        randomNum.push(numbers[Math.floor(Math.random() * numbers.length )]) 
        removeNum(randomNum[i-1])
        var done = true
    }
    if(done == true){
        for(i=0;i<buttonArr.length; i++){
            buttonArr[i].hidden = ''
        }
    }

} else if(difficulty.className = 'easy'){
    for (i=1; i < 9; i++) {
        buttonArr.push(document.getElementById('b'+i));
        safeBtnArr.push(document.getElementById('b'+i));
        randomNum.push(numbers[Math.floor(Math.random() * numbers.length )]) 
        removeNum(randomNum[i-1])
    }

}
    options.hidden = 'hidden'
    button.hidden = ''
    pressed = true 
}


function removeNum(Num){
    numbers.splice(numbers.indexOf(Num), 1)
}


function check(){
    if(checkBtnArr[0] != checkBtnArr[1] && checkNumArr[0] == checkNumArr[1]){
        match()
    } else {
        unmatch()
    }

}

function tryAgain(){
    window.location.reload(true)
}


function onclickFunc(btn, randomNum){
    reveal(btn, randomNum);
    count++
    checkNumArr.push(randomNum)
    flipped();
    end();
    }


function reveal(btn, randomNum){
    if(checkNumArr.length < 2){ 
    btn.className = 'open'
    btn.innerHTML = randomNum
    checkBtnArr.push(btn)

    }
}

function flipped(){
    if(count % 2 == 0 || count == 2){
        for(i=0; i<buttonArr.length; i++){
        buttonArr[i].disabled = true;
        check()
        }
    }
}

function end(){
    if(buttonArr == ''){
    clearInterval(time)
        buttons.hidden = 'true'
        endScreen.hidden = ''
        par2.className = ''
        document.getElementById('par2').innerHTML = 'Congratulations'
        document.getElementById('par3').innerHTML = 'Time: ' + sec
        document.getElementById('par4').innerHTML = 'Turns: ' + count/2
    }
}

function match() {
    for(i=0; i<checkBtnArr.length; i++){
    buttonArr.splice(buttonArr.indexOf(checkBtnArr[i]), 1)
    checkBtnArr[i].className = 'matched'
    }
    for(i=0; i<buttonArr.length; i++){
        buttonArr[i].disabled = false;
    }
    checkBtnArr = []
    checkNumArr = []
}

function unmatch(){
        checkBtnArr = []
        checkNumArr = []
        setTimeout(function(){
        for(i=0; i<buttonArr.length; i++){
            buttonArr[i].className = 'card';
            buttonArr[i].disabled = false;}}, 200)
}

function timer(){
    if(pressed == true){
    sec++
    document.getElementById('par1').innerHTML = sec  
    }
}
const time = setInterval(timer, 1000)

