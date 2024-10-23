class Calculator {
  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttonsContainer = document.querySelector(".buttons-numbers");
    this.inputs = document.querySelectorAll(".button-inputs button");
    this.operations = "+/-x";
    this.temporary = [];
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = null;
  }

  applyButtonListener() {
    this.inputs.forEach((button) => {
      button.addEventListener("click", () => {
        if (this.inputField.textContent == 0) {
          this.inputField.textContent = button.textContent;
          this.temporary.push(button.textContent);
        } else if (this.operations.includes(button.textContent)) {
          this.operator = button.textContent;
          console.log(this.operator);
          if (this.firstNumber == null) {
            this.firstNumber = +this.temporary.join("");
          }
          console.log(this.firstNumber);
          this.inputField.textContent = 0;
          this.temporary = [];
        } else if (button.textContent == "=") {
          this.secondNumber = +this.temporary.join("");
          this.operate();
        } else {
          this.inputField.textContent += button.textContent;
          this.temporary.push(button.textContent);
        }
        console.log(this.temporary);
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
      case "*":
        this.inputField.textContent = this.multiply();
        break;
    }
    this.firstNumber = +this.inputField.textContent;
    this.secondNumber = 0;
  }
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
