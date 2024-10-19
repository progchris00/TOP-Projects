class Calculator {
  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttonsContainer = document.querySelector(".buttons-numbers");
    this.buttonsNumbers = this.buttonsContainer.querySelectorAll("button");
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
}

const TOPCalculator = new Calculator();
TOPCalculator.applyButtonListener();
