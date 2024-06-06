let numBtns = document.querySelectorAll('.num-btns');
let numDisplay = document.querySelector('#num-display');
let allCancelBtn = document.querySelector('#btn-17');
let cancelBtn = document.querySelector('#btn-16');
let addBtn = document.querySelector('#btn-4');
let subBtn = document.querySelector('#btn-8');
let productBtn = document.querySelector('#btn-12');
let divideBtn = document.querySelector('#btn-18');
let equalBtn = document.querySelector('#btn-15');
let miniDisplay = document.querySelector('#mini-display');
let operatorBtns = document.querySelectorAll('.operator-btns');
let resultNum;
let sumCount = 0;

let numArr = [];
let operator;

cancelBtn.addEventListener('click',() => {
    numDisplay.innerHTML = numDisplay.innerHTML.slice(0, numDisplay.innerHTML.length-1);
    if(numDisplay.innerHTML === "") {
        numDisplay.innerHTML = "0";
    }
})

allCancelBtn.addEventListener('click',() => {
    numDisplay.innerHTML = "0";
});

for(let numBtn of numBtns) {
    numBtn.addEventListener('click',() => {
        numBtnClick(numBtn.innerHTML);
    });
}

let numBtnClick = (a) => {
    console.log(a);
    if(numDisplay.innerHTML == "0") {
        numDisplay.innerHTML = a;
    } else {
        numDisplay.innerHTML = numDisplay.innerHTML + a;
    }
}

let operatorClick = (o) => {
    operator = o;
    numArr.push(parseFloat(numDisplay.innerHTML));
    miniDisplay.innerHTML = numDisplay.innerHTML + operator;
    numDisplay.innerHTML = "0";
}

for(let operatorBtn of operatorBtns) {
    operatorBtn.addEventListener('click',() => {
        operatorClick(operatorBtn.innerHTML);
    });
}

equalBtn.addEventListener('click',() => {
    if(numArr.length > 0) {
        numArr.push(parseFloat(numDisplay.innerHTML));
        console.log(numDisplay.innerHTML);
        if(operator === "+") {
            numArr.forEach((element)=>{
                sumCount += element;
            });
            resultNum = sumCount.toFixed(2);
            sumCount = 0;
        } else if(operator === "-") {
            resultNum = (numArr[0] - numArr[1]).toFixed(2);
        } else if(operator === "/") {
            resultNum = (numArr[0] / numArr[1]).toFixed(2);
        } else if(operator === "x") {
            resultNum = (numArr[0] * numArr[1]).toFixed(2);
        }
        miniDisplay.innerHTML = "";
        numDisplay.innerHTML = resultNum;
        resultNum = 0;
        numArr = [];
    }
});