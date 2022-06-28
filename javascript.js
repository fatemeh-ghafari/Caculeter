const display = document.querySelector('.display');
const equals = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

function operate(operator, one, two) {
	display.textContent = '';
	if (operator === 'add') {
		return add(one, two);
	} else if (operator === 'multiply') {
		return multiply(one, two);
	} else if (operator === 'divide') {
		return divide(one, two);
	} else if (operator === 'subtract') {
		return subtract(one, two);
	}
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

clearBtn.addEventListener('click', clear);

function clear() {
	display.textContent = '';
	displayValue = 0;
	lastDisplayValue = 0;
	operator = '';
	userInput.length = 0;
	lastOperation = 0;
}

let displayValue = 0;
let operator;
let lastOperation;

const userInput = [];

function inputCheck() {
	op1 = userInput[0];
	op2 = userInput[2];
	operator = userInput[1];

	lastOperation = operate(operator, op1, op2);
	display.textContent = lastOperation;
	userInput.splice(0, 3);
	userInput.unshift(lastOperation);
}

equals.addEventListener('click', function () {
	if (userInput.length === 4) {
		inputCheck();
	}
});

const digits = document.querySelectorAll('.digits');

digits.forEach(function (digit) {
	digit.addEventListener('click', function (e) {
		const element = e.target;
		if (element.classList.contains('digit')) {
			if (display.textContent === displayValue) {
				display.textContent = '';
			}
			
			display.textContent += e.target.value;
		}
	});
});

const operators = document.querySelectorAll('.operator');

operators.forEach(function (operator) {
	operator.addEventListener('click', function (e) {
		const element = e.target;
		if (element.classList.contains('operator')) {
			displayValue = display.textContent;
			lastDisplayValue = displayValue;
			console.log(displayValue);
			console.log(e.target.value);
			userInput.push(parseInt(displayValue));
			userInput.push(e.target.value);

			if (userInput.length === 4) {
				inputCheck();
			}
		}
	});
});
