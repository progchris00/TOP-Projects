const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (input.textContent == 0) {
      input.textContent = button.textContent;
    } else {
      input.textContent += button.textContent;
    }
  });
});
