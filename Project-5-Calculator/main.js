class Calculator {
  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttons = document.querySelectorAll("button");
  }

  applyButtonListener() {
    this.buttons.forEach((button) => {
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
