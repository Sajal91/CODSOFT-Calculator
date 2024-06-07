let numBtns = document.querySelectorAll('.num-btns');
let numDisplay = document.querySelector('#num-display');
let allCancelBtn = document.querySelector('#btn-17');
let cancelBtn = document.querySelector('#btn-16');
let equalBtn = document.querySelector('#btn-15');
let miniDisplay = document.querySelector('#mini-display');
let operatorBtns = document.querySelectorAll('.operator-btns');
let sumCount = 0;
let subCount = 0;
let productCount = 1;
let divideCount = 1;

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

let operatorCount = 0;
let operatorIterator = 0;

let operatorClick = (o) => {
    operator.push(o);
    numArr.push(parseFloat(numDisplay.innerHTML));
    // console.log(numArr);
    miniDisplay.innerHTML = miniDisplay.innerHTML + numDisplay.innerHTML + o;
    if(operatorCount >= 1) {
        if(operator[operatorIterator] == "+") {
            numArr.forEach((element)=>{
                sumCount += element;
            });
            numArr = [];
            operatorIterator++;
            numArr.push(sumCount);
            sumCount = 0;
            // console.log(numArr);
        } else if(operator[operatorIterator] == "-") {
            subCount = numArr[0] - numArr[1];
            numArr = [];
            numArr.push(subCount);
            // console.log(numArr);
            operatorIterator++;
        } else if(operator[operatorIterator] == "x") {
            productCount = numArr[0] * numArr[1];
            numArr = [];
            numArr.push(productCount);
            // console.log(numArr);
            operatorIterator++;
        } else if(operator[operatorIterator] == "/") {
            divideCount = numArr[0] / numArr[1];
            numArr = [];
            numArr.push(divideCount);
            // console.log(numArr);
            operatorIterator++;
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
    // if(numArr.length > 0) {
        // console.log('=');
        // console.log(operator);
        numArr.push(parseFloat(numDisplay.innerHTML));
        // console.log(numArr);
        if(operator[operator.length-1] == "+") {
            let resultNum;
            resultNum = numArr[0] + numArr[1];
            numArr = [];
            // numArr.push(resultNum);
            numDisplay.innerHTML = resultNum;
        } else if(operator[operator.length-1] == "-") {
            let resultNum;
            resultNum = numArr[0] - numArr[1];
            numArr = [];
            // numArr.push(resultNum);
            numDisplay.innerHTML = resultNum;
        } else if(operator[operator.length-1] == "x") {
            let resultNum;
            resultNum = numArr[0] * numArr[1];
            numArr = [];
            // numArr.push(resultNum);
            numDisplay.innerHTML = resultNum;
        } else if(operator[operator.length-1] == "/") {
            let resultNum;
            resultNum = numArr[0] / numArr[1];
            numArr = [];
            // numArr.push(resultNum);
            numDisplay.innerHTML = resultNum;
        }
        miniDisplay.innerHTML = "";
        numArr = [];
        operator = [];
        operatorIterator = 0;
    // }
});