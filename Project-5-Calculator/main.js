class Calculator {
  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttonsContainer = document.querySelector(".buttons-numbers");
    this.buttonsNumbers = this.buttonsContainer.querySelectorAll("button");
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operator = null;
  }

  applyButtonListener() {
    this.buttonsNumbers.forEach((button) => {
      button.addEventListener("click", () => {
        if (this.inputField.textContent == 0) {
          this.inputField.textContent = button.textContent;
        } else {
          this.inputField.textContent += button.textContent;
        }
      });
    });
  }

  add() {}
  subtract() {}
  multiply() {}
  divide() {}
  operate() {}
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
