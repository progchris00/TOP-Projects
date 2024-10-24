class Calculator {
  static OPERATIONS = "+-/x";
  static NUMERICS = "0123456789";

  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttons = document.querySelectorAll("button");
    this.temporaryNumberStorage = [];
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = null;
  }

  applyButtonListener() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (Calculator.NUMERICS.includes(button.textContent)) {
          if (this.inputField.textContent == 0) {
            this.inputField.textContent = button.textContent;
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

  add() {
    return this.firstNumber + this.secondNumber;
  }
  subtract() {
    return this.firstNumber - this.secondNumber;
  }
  multiply() {
    return this.firstNumber * this.secondNumber;
  }
  divide() {
    return this.firstNumber / this.secondNumber;
  }

  operate() {
    switch (this.operator) {
      case "+":
        this.inputField.textContent = this.add();
        break;
      case "-":
        this.inputField.textContent = this.subtract();
        break;
      case "/":
        this.inputField.textContent = this.divide();
        break;
      case "x":
        this.inputField.textContent = this.multiply();
        break;
    }
    this.firstNumber = +this.inputField.textContent;
    this.secondNumber = null;
  }
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
