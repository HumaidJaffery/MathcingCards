//variables
var btn1 = document.getElementById('b1');
var btn2 = document.getElementById('b2');
var btn3 = document.getElementById('b3');
var btn4 = document.getElementById('b4');
var btn5 = document.getElementById('b5');
var btn6 = document.getElementById('b6');
var btn7 = document.getElementById('b7');
var btn8 = document.getElementById('b8');
var btn9 = document.getElementById('b9');
var btn10 = document.getElementById('b10');
var btn11 = document.getElementById('b11');
var btn12 = document.getElementById('b12');
var btn13 = document.getElementById('b13');
var btn14 = document.getElementById('b14');
var btn15 = document.getElementById('b15');
var btn16 = document.getElementById('b16');
var btn17 = document.getElementById('b17');
var btn18 = document.getElementById('b18');
var btn19 = document.getElementById('b19');
var btn20 = document.getElementById('b20');
var btn21 = document.getElementById('b21');
var btn22 = document.getElementById('b22');
var btn23 = document.getElementById('b23');
var btn24 = document.getElementById('b24');
var tryAgainBtn = document.getElementById('tryAgainId');
var menuBtn = document.getElementById('menuId');
var button = document.getElementById('buttons');
var difficulty = document.getElementById('_difficulty')
let checkNumArr = []
let checkBtnArr = []
var count = 0;
var sec = 0; 
var numbers = ['1', '2', '3', '4','1', '2', '3', '4',]
var buttonArr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8]
var hardBtnArr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17, btn18, btn19, btn20, btn21, btn22, btn23, btn24]
var mediumBtnArr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16]
var pressed = false
var randomNum1;
var randomNum2;
var randomNum3;
var randomNum4;
var randomNum5;
var randomNum6;
var randomNum7;
var randomNum8;
var randomNum9;
var randomNum10;
var randomNum11;
var randomNum12;
var randomNum13;
var randomNum14;
var randomNum15;
var randomNum16;
var randomNum17;
var randomNum18;
var randomNum19;
var randomNum20;
var randomNum21;
var randomNum22;
var randomNum23;
var randomNum24;


function done(){
if(difficulty.className == 'medium'){
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8']
    buttonArr = mediumBtnArr
    for(i=0; i<mediumBtnArr.length; i++){
        mediumBtnArr[i].hidden = ''
    }
    randomNum1 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum1)
    randomNum2 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum2)
    randomNum3 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum3)
    randomNum4 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum4)
    randomNum5 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum5)
    randomNum6 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum6)
    randomNum7 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum7)
    randomNum8 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum8)
    randomNum9 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum9)
    randomNum10 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum10)
    randomNum11 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum11)
    randomNum12 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum12)
    randomNum13 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum13)
    randomNum14 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum14)
    randomNum15 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum15)
    randomNum16 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum16)

} else if(difficulty.className == 'hard'){
    buttonArr = hardBtnArr
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8',  '9',  '10', '11', '12','1', '2', '3', '4', '5', '6', '7', '8',  '9',  '10', '11', '12']
    for(i=0; i<hardBtnArr.length; i++){
        hardBtnArr[i].hidden = ''
    }
    randomNum1 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum1)
    randomNum2 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum2)
    randomNum3 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum3)
    randomNum4 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum4)
    randomNum5 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum5)
    randomNum6 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum6)
    randomNum7 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum7)
    randomNum8 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum8)
    randomNum9 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum9)
    randomNum10 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum10)
    randomNum11 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum11)
    randomNum12 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum12)
    randomNum13 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum13)
    randomNum14 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum14)
    randomNum15 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum15)
    randomNum16 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum16)
    randomNum17 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum17)
    randomNum18 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum18)
    randomNum19 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum19)
    randomNum20 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum20)
    randomNum21 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum21)
    randomNum22 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum22)
    randomNum23 = numbers[Math.floor(Math.random() * numbers.length)] 
    removeNum(randomNum23)
    randomNum24 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum24)

} else if(difficulty.className = 'easy'){
    randomNum1 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum1)
    randomNum2 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum2)
    randomNum3 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum3)
    randomNum4 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum4)
    randomNum5 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum5)
    randomNum6 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum6)
    randomNum7 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum7)
    randomNum8 = numbers[Math.floor(Math.random() * numbers.length)]
    removeNum(randomNum8)
}

    options.hidden = 'hidden'
    button.hidden = ''
    pressed = true
    

}

function removeNum(Num){
    numbers.splice(numbers.indexOf(Num), 1)
}


function check(){
    if(checkNumArr[0] == checkNumArr[1]){
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

function maxCards(){ 

}