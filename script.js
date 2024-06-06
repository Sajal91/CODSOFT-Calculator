let numBtns = document.querySelectorAll('.num-btns');
let numDisplay = document.querySelector('#num-display');
let allCancelBtn = document.querySelector('#btn-17');
let cancelBtn = document.querySelector('#btn-16');
let equalBtn = document.querySelector('#btn-15');
let miniDisplay = document.querySelector('#mini-display');
let operatorBtns = document.querySelectorAll('.operator-btns');
let resultNum;
let sumCount = 0;
let subCount = 0;
let productCount = 1;
let divideCount = 1;

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
    miniDisplay.innerHTML = miniDisplay.innerHTML + numDisplay.innerHTML + operator;
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
        if(operator === "+") {
            numArr.forEach((element)=>{
                sumCount += element;
            });
            resultNum = sumCount.toFixed(2);
            sumCount = 0;
        } else if(operator === "-") {
            numArr.forEach((element)=>{
                subCount += element;
            });
            resultNum = subCount.toFixed(2);
            subCount = 0;
        } else if(operator === "x") {
            numArr.forEach((element)=>{
                productCount *= element;
            });
            resultNum = productCount.toFixed(2);
            productCount = 1;
        } else if(operator === "/") {
            
        }
        miniDisplay.innerHTML = "";
        numDisplay.innerHTML = resultNum;
        resultNum = 0;
        numArr = [];
    }
});