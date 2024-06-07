let numBtns = document.querySelectorAll('.num-btns');
let numDisplay = document.querySelector('#num-display');
let allCancelBtn = document.querySelector('#btn-17');
let cancelBtn = document.querySelector('#btn-16');
let equalBtn = document.querySelector('#btn-15');
let miniDisplay = document.querySelector('#mini-display');
let operatorBtns = document.querySelectorAll('.operator-btns');
let operatorCount = 0;
let equalBtnToggler = false;

let numArr = [];
let operator = [];

cancelBtn.addEventListener('click',() => {
    numDisplay.innerHTML = numDisplay.innerHTML.slice(0, numDisplay.innerHTML.length-1);
    if(numDisplay.innerHTML === "") {
        numDisplay.innerHTML = "0";
    }
})

allCancelBtn.addEventListener('click',() => {
    numDisplay.innerHTML = "0";
    miniDisplay.innerHTML = "";
    numArr = [];
    operator = [];
    newArr = [];
    operatorCount = 0;
    equalBtnToggler = false;
});

for(let numBtn of numBtns) {
    numBtn.addEventListener('click',() => {
        numBtnClick(numBtn.innerHTML);
    });
}

let numBtnClick = (a) => {
    if(numDisplay.innerHTML == "0") {
        numDisplay.innerHTML = a;
    } else {
        numDisplay.innerHTML = numDisplay.innerHTML + a;
    }
}

let decimalCheck = (value) => {
    if(Math.ceil(value) != Math.floor(value)) {
        return value.toFixed(2);
    } else {
        return value;
    }
}


let performCalculation = (x) => {
    let resultNum;
    switch(operator[x]) {
        case '+':
            resultNum = decimalCheck(numArr[0] + numArr[1]);
            break;
        case '-':
            resultNum = decimalCheck(numArr[0] - numArr[1]);
            break;
        case 'x':
            resultNum = decimalCheck(numArr[0] * numArr[1]);
            break;
        case '/':
            resultNum = decimalCheck(numArr[0] / numArr[1]);
            break;
    }
    if(equalBtnToggler == true) {
        numDisplay.innerHTML = resultNum;
        miniDisplay.innerHTML = "";
    } else {
        miniDisplay.innerHTML = resultNum;
        numArr = [];
        numArr.push(resultNum);
    }
}

let operatorClick = (o) => {
    operator.push(o);
    console.log(numDisplay.innerHTML);
    numArr.push(parseFloat(numDisplay.innerHTML));
    console.log(numArr);
    console.log(operator);
    if(equalBtnToggler == true) {
        miniDisplay.innerHTML = numDisplay.innerHTML;
        if(operator.length > 1) {
            performCalculation(operator.length-2);
        }
        equalBtnToggler = false;
    } else {
        miniDisplay.innerHTML = miniDisplay.innerHTML + numDisplay.innerHTML + o;
        if(operatorCount >= 1) {
            performCalculation(operator.length-2);
        }
    }
    numDisplay.innerHTML = "0";
    operatorCount++;
}

for(let operatorBtn of operatorBtns) {
    operatorBtn.addEventListener('click',() => {
        operatorClick(operatorBtn.innerHTML);
    });
}

equalBtn.addEventListener('click',() => {
    equalBtnToggler = true;
    if(numArr.length == 1 && numDisplay.innerHTML !== "0") {
        numArr.push(parseFloat(numDisplay.innerHTML));
        performCalculation(operator.length-1);
    }
    operator = [];
    numArr = [];
    miniDisplay.innerHTML = "";
});