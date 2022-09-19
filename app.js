let num1 = 0;
let tempNum1Arry = [];
let num2 = 0;
let tempNum2Arry = [];

let savedFirstValue = 0

// let operator = "";
let tempOperatorArray = [];
let calcDisplay = document.querySelector('#display')

// let decimalBtn = document.querySelector('.decimal')
// const operandButtons = document.querySelectorAll('.operand')


// let num1 = 0;
// let tempNum1Arry = [];
// let num2 = 0;
// let tempNum2Arry = [];
// let savedFirstValue = 0;
// let operator = "";
// let tempOperatorArray = [];


function add(num1, num2) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("add", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded
};

function subtract(num1, num2) {
    let subtractValue = (num1 - num2)
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("subtract", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded
};

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("multiply", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded
};

function divide(num1, num2) {
    let divideValue = (num1 / num2);

    if (divideValue == "Infinity") {
        return alert("Error!  Cannot divide by zero!  You should know better....");
    } else {
        let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
        rounded = rounded.toFixed(2);
        console.log("divide", rounded);
        const calcDisplay = document.querySelector("#display");
        calcDisplay.textContent = rounded;
    }
};

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            alert("ERROR!")
    }
}


let data = {
    num1: 0,
    num2: 0,
    operator: ""
}


function runCalculation() {
    function getNumberClicked() {
        const operandButtons = document.querySelectorAll('.operand')
        operandButtons.forEach((button) => [
            button.addEventListener('click', () => {
                console.log("click me")
                savedFirstValue = button.getAttribute('value')
                console.log(savedFirstValue)

                if (data.operator == ''){
                    tempNum1Arry.push(savedFirstValue)
                    console.log("tempNum1Arrat", tempNum1Arry)
                    console.log("num1", data.num1)
                    data.num1 = parseFloat(tempNum1Arry.join(""));
                    console.log("updated num1", data.num1)
                    calcDisplay.textContent = data.num1
                } else {
                    tempNum2Arry.push(savedFirstValue)
                    console.log("tempNum2Array", tempNum2Arry)
                    console.log("num2", data.num2)
                    data.num2 = parseFloat(tempNum2Arry.join(""));
                    console.log("updated num2", data.num2)
                    calcDisplay.textContent = data.num2
                }
            })
        ])
    }

    function getOperatorSelection(){
        const operatorButtons = document.querySelectorAll('.operator')
        operatorButtons.forEach((button) => {
            button.addEventListener('click', () => {
                console.log("clicked operator")
                operatorValue = button.getAttribute('value')
                console.log("operatorValue", operatorValue)
                tempOperatorArray.push(operatorValue)
                console.log("tempOperatorArray", tempOperatorArray)
                console.log('operator', data.operator)
                data.operator = tempOperatorArray.toString()
                console.log('upgaded operator', data.operator)
                calcDisplay.textContent = 0;
            })
        })
    }


    function runCalculation(){
        const equalsButton = document.querySelector('.equals')
        equalsButton.addEventListener('click', () => {
            let num1 = parseFloat(data.num1)
            let num2 = parseFloat(data.num2)
            let operator = data.operator
            
            console.log("num1, num2, operator", num1, num2, operator)
             operate(operator, num1, num2);
            
        })
    }
    // function addDecimal(){
    //     const decimalBtn = document.querySelector('.decimal')
    //     decimalBtn.addEventListener('click', () => {
    //         decimalBtnValue = decimalBtn.getAttribute('value') 

    //         if (data.operator == ''){
    //             tempNum1Arry.push(savedFirstValue)
    //             console.log("tempNum1Arrat", tempNum1Arry)
    //             console.log("num1", data.num1)
    //             data.num1 = parseFloat(tempNum1Arry.join(""));
    //             console.log("updated num1", data.num1)
    //             calcDisplay.textContent = data.num1
    //         } else {
    //             tempNum2Arry.push(savedFirstValue)
    //             console.log("tempNum2Array", tempNum2Arry)
    //             console.log("num2", data.num2)
    //             data.num2 = parseFloat(tempNum2Arry.join(""));
    //             console.log("updated num2", data.num2)
    //             calcDisplay.textContent = data.num2
    //         }
    //     })
    // }

    getNumberClicked()
    getOperatorSelection()
    runCalculation()
}

runCalculation()


// function runCalculator() {

//     function getNumberClicked() {
//         const operandButtons = document.querySelectorAll('.operand')
//         operandButtons.forEach((button) => {
//             button.addEventListener('click', () => {
//                 console.log("clicked me")
//                 savedFirstValue = button.getAttribute('value')
//                 console.log(savedFirstValue)

//                 if (operator == '') {
//                     tempNum1Arry.push(savedFirstValue)
//                     console.log("tempNum1Arrat", tempNum1Arry)
//                     num1 = tempNum1Arry.join("")
//                     console.log('num1:', num1)
//                     calcDisplay.textContent = num1
//                 } else {
//                     tempNum2Arry.push(savedFirstValue)
//                     console.log("tempNum2Arrat", tempNum2Arry)
//                     num2 = tempNum2Arry.join("")
//                     console.log('num2:', num2)
//                     calcDisplay.textContent = num2
//                 }
//             })
//         })
//     }


//     function getOperatorSelection() {
//         let operatorButtons = document.querySelectorAll('.operator')
//         operatorButtons.forEach((button) => {
//             button.addEventListener('click', () => {
//                 console.log("clecked operator")
//                 operator = button.getAttribute('value')
//                 tempOperatorArray.push(operator)
//                 operator = tempOperatorArray.join("")
//                 console.log("1operator:", operator)
//                 // console.log("store temp operator in array for string calcs: ", tempOperatorArray);


//             })
//         })
//     }


//     function runCalculation(){
//         let equalsButton = document.querySelector('.equals')
//         equalsButton.addEventListener('click', () => {
//             console.log("time to run the math!", num1, num2, operator);
//             num1 = parseFloat(num1);
//             num2 = parseFloat(num2);
//             console.log("num1:", num1)
//             console.log("num2:", num2)

//             operate(operator, num1, num2)
//             // console.log("solution:", operate)
//         })
//     }

//     // DOM for clear button
//     const clearButton = document.querySelector(".clear")
//     clearButton.addEventListener('click', () => { location.reload(); })

//     // DOM for decimal button
//     decimalBtn.addEventListener('click', () => {
//         console.log("decimal pressed!")
//         let btnValue = decimalBtn.value
//         console.log(btnValue)

//         if (operator == "") {
//             tempNum1Arry.push(btnValue)

//             num1 = tempNum1Arry.join("")
//             calcDisplay.textContent = num1

//         } else {
//             tempNum2Arry.push(btnValue)
//             num2 = tempNum2Arry.join("")
//             calcDisplay.textContent = num2
//         }
//     })

//     getNumberClicked()
//     getOperatorSelection()
//     runCalculation()
// }

// runCalculator()
