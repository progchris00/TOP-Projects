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
        } else if (button.value == "clear") {
          this.clear();
        }

        console.log(TOPCalculator);
      });
    });
  }

  handleNumerics(button) {
    // Populate input field on first input and append when a number is already exists.
    // Reset the first number when the operator is null.
    // Operator is not null only when there is an ongoing computation.

    if (this.temporaryNumberStorage == 0 || this.inputField.textContent == 0) {
      this.inputField.textContent = button.value;
    } else {
      this.inputField.textContent += button.value;
    }

    if (this.firstNumber && this.operator == null) {
      this.firstNumber = null;
    }

    this.temporaryNumberStorage.push(button.value);
  }

  handleOperations(button) {
    if (this.firstNumber) {
      this.handleEqual();
    } else {
      this.firstNumber = +this.temporaryNumberStorage.join("");
      this.temporaryNumberStorage = [];
    }
    this.operator = button.value;
  }

  handleEqual() {
    this.secondNumber = +this.temporaryNumberStorage.join("");
    this.temporaryNumberStorage = [];
    this.operate();
  }

  operate() {
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
    if (this.firstNumber % 1 != 0) {
      this.inputField.textContent = this.firstNumber.toFixed(2);
    } else {
      this.inputField.textContent = this.firstNumber;
    }

    if (this.operator == "/" && this.secondNumber == 0) {
      this.inputField.textContent = "Syntax error: Cannot divide by zero.";
    }

    this.operator = null;
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

  clear() {
    this.inputField.textContent = 0;
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = null;
    this.temporaryNumberStorage = [];
  }
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
