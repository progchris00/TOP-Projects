class Calculator {
  static OPERATIONS = "+-/x";
  static NUMERICS = "0123456789";

  constructor() {
    this.inputField = document.querySelector(".input");
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
        if (Calculator.NUMERICS.includes(button.textContent)) {
          if (this.inputField.textContent == 0) {
            this.inputField.textContent = button.textContent;
          } else if (this.result != null) {
            this.secondNumber = +this.temporaryNumberStorage.join("");
            this.temporaryNumberStorage = [];
            this.inputField.textContent = button.textContent;
            this.firstNumber = null;
            this.result = null;
          } else {
            this.inputField.textContent += button.textContent;
          }
          this.temporaryNumberStorage.push(button.textContent);
        }

        if (Calculator.OPERATIONS.includes(button.textContent)) {
          this.operator = button.textContent;

          if (this.firstNumber == null) {
            this.firstNumber = +this.temporaryNumberStorage.join("");
          }

          this.inputField.textContent = 0;
          this.temporaryNumberStorage = [];
        }

        if (button.textContent == "=") {
          this.secondNumber = +this.temporaryNumberStorage.join("");
          this.operate();
        }
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
      case "x":
        this.multiply();
        break;
    }
    this.inputField.textContent = this.result;
    this.firstNumber = +this.inputField.textContent;
    this.result = this.firstNumber;
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
