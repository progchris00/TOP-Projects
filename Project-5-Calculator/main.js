class Calculator {
  static OPERATIONS = "+-/*";
  static NUMERICS = "0123456789";

  constructor() {
    this.inputField = document.querySelector(".input-field");
    this.buttons = document.querySelectorAll("button");
    this.temporaryNumberStorage = [];
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = null;
  }

  applyButtonListener() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (Calculator.NUMERICS.includes(button.value)) {
          this.handleNumerics(button);
        } else if (Calculator.OPERATIONS.includes(button.value)) {
          this.handleOperations(button);
        } else if (button.value == "=") {
          this.handleEqual();
        }

        console.log(TOPCalculator);
      });
    });
  }

  handleNumerics(button) {
    this.inputField.textContent == 0
      ? (this.inputField.textContent = button.value)
      : (this.inputField.textContent += button.value);

    this.temporaryNumberStorage.push(button.value);
  }

  handleOperations(button) {
    // Set operation when clicked. Evaluate expression for the first time and also when one is evaluated.

    this.operator = button.value;

    if (this.result) {
      this.firstNumber = this.result;
      this.result = null;
    } else {
      this.firstNumber = +this.temporaryNumberStorage.join("");
      this.temporaryNumberStorage = [];
    }
  }

  handleEqual() {
    if (this.firstNumber && this.temporaryNumberStorage) {
      this.operate();
    }
    this.temporaryNumberStorage = [];
  }

  operate() {
    this.secondNumber = +this.temporaryNumberStorage.join("");
    switch (this.operator) {
      case "+":
        this.add();
        break;
      case "-":
        this.subtract();
        break;
      case "/":
        this.divide();
        break;
      case "*":
        this.multiply();
        break;
    }
    this.inputField.textContent = this.firstNumber;
    this.secondNumber = null;
  }

  add() {
    this.firstNumber = this.firstNumber + this.secondNumber;
  }
  subtract() {
    this.firstNumber = this.firstNumber - this.secondNumber;
  }
  multiply() {
    this.firstNumber = this.firstNumber * this.secondNumber;
  }
  divide() {
    this.firstNumber = this.firstNumber / this.secondNumber;
  }
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
