class Calculator {
  static OPERATIONS = "+-/*";
  static NUMERICS = "0123456789";

  constructor() {
    this.inputField = document.querySelector(".input-field");
    this.resultField = document.querySelector(".result-field");
    this.buttons = document.querySelectorAll("button");
    this.temporaryNumberStorage = [];
    this.firstNumber = null;
    this.secondNumber = null;
    this.result = null;
    this.operator = null;
  }

  applyButtonListener() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (Calculator.NUMERICS.includes(button.value)) {
          if (this.inputField.textContent == 0) {
            this.inputField.textContent = button.value;
          } else {
            this.inputField.textContent += button.value;
          }

          this.temporaryNumberStorage.push(button.value);
        }

        if (Calculator.OPERATIONS.includes(button.value)) {
          this.operator = button.value;

          if (this.firstNumber == null) {
            this.firstNumber = +this.temporaryNumberStorage.join("");
          }

          this.temporaryNumberStorage = [];
        }

        if (button.value == "=") {
          this.secondNumber = +this.temporaryNumberStorage.join("");
          if (this.operator == null) {
            this.resultField.textContent = +this.secondNumber;
          } else {
            this.operate();
          }
        }
        console.log(this.temporaryNumberStorage);
      });
    });
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
    this.resultField.textContent = this.result;
    this.firstNumber = null;
    this.secondNumber = null;
  }

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }
  subtract() {
    this.result = this.firstNumber - this.secondNumber;
  }
  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }
  divide() {
    this.result = this.firstNumber / this.secondNumber;
  }
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
