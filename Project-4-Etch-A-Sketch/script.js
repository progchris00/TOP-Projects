const container = document.querySelector(".container");
const picker = document.querySelector(".picker");
const clearButton = document.querySelector(".clear-button");

const rowTotalCount = 32;
const columnTotalCount = 32;

let pixelCount = 0;
let rowCount = 0;

for (let row = 1; row <= rowTotalCount; row++) {
  const row = document.createElement("div");
  row.classList.add("row", rowCount);
  container.appendChild(row);
  rowCount++;

  for (let column = 1; column <= columnTotalCount; column++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.classList.add(pixelCount);
    row.appendChild(div);
    pixelCount++;
  }
}

let isDrawing = false;
let currentColor;

const allPixels = document.querySelectorAll(".pixel");

allPixels.forEach((pixel) => {
  pixel.addEventListener("mousedown", () => {
    currentColor = picker.value;
    isDrawing = true;
    pixel.style.background = currentColor;
  });

  pixel.addEventListener("mouseover", () => {
    if (isDrawing) {
      pixel.style.background = currentColor;
    }
  });

  pixel.addEventListener("mouseup", () => {
    isDrawing = false;
  });
});

clearButton.addEventListener("click", () => {
  allPixels.forEach((pixel) => {
    pixel.style.background = "white";
  });
});
