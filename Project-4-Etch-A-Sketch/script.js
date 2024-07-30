const container = document.querySelector(".sketch-container");
const picker = document.querySelector(".picker-tool");
const clearButton = document.querySelector(".clearing-tool");
const sketchingArea = document.querySelector(".sketching-area");
const gridCountSlider = document.querySelector(".grid-count-slider");

let pixelTotalCount;
let rowCount;
let columnCount;

let pixelCount = 0;

let isDrawing = false;
let currentColor;

gridCountSlider.addEventListener("change", () => {
  rowCount = gridCountSlider.value;
  columnCount = gridCountSlider.value;

  pixelTotalCount = rowCount * columnCount;
  for (let pixelCount = 1; pixelCount <= pixelTotalCount; pixelCount++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel", pixelCount);
    pixel.draggable = false;
    pixel.style.width = `${100 / rowCount}%`;
    sketchingArea.appendChild(pixel);
  }
});

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

  pixel.addEventListener("drag", () => {
    isDrawing = false;
  });
});

clearButton.addEventListener("click", () => {
  allPixels.forEach((pixel) => {
    pixel.style.background = "white";
  });
});
