class Calculator {
  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttonsContainer = document.querySelector(".buttons-numbers");
    this.inputs = document.querySelectorAll(".button-inputs button");
    this.operations = "+/-x";
    this.temporary = [];
    this.firstNumber = 0;
    this.secondNumber = 0;
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
          this.firstNumber = +this.temporary.join("");
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

  add() {}
  subtract() {}
  multiply() {}
  divide() {}
  operate() {
    switch (this.operator) {
      case "+":
        this.inputField.textContent = this.firstNumber + this.secondNumber;
        break;
      case "-":
        this.inputField.textContent = this.firstNumber - this.secondNumber;
        break;
      case "/":
        this.inputField.textContent = this.firstNumber / this.secondNumber;
        break;
      case "*":
        this.inputField.textContent = this.firstNumber * this.secondNumber;
        break;
    }
  }
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
