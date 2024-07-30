const container = document.querySelector(".sketch-container");
const picker = document.querySelector(".picker-tool");
const clearButton = document.querySelector(".clearing-tool");
const sketchingArea = document.querySelector(".sketching-area");
const gridSizeSlider = document.querySelector(".grid-size-slider");
const girdCurrentSize = document.querySelector(".grid-current-size");

let columnCount = 16;
let rowCount = 16;
let gridSize = columnCount * rowCount;
let allPixels;

const loadGrid = () => {
  for (let pixelCount = 0; pixelCount < gridSize; pixelCount++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel", pixelCount);
    pixel.draggable = false;
    pixel.style.width = `${100 / columnCount}%`;
    sketchingArea.appendChild(pixel);
    allPixels = document.querySelectorAll(".pixel");
    attachEvent();
  }
};

gridSizeSlider.addEventListener("change", () => {
  columnCount = gridSizeSlider.value;
  rowCount = gridSizeSlider.value;
  gridSize = columnCount * rowCount;
  sketchingArea.innerHTML = "";
  girdCurrentSize.textContent = `Grid count: ${columnCount} x ${rowCount}`;
  loadGrid();
});

let isDrawing = false;
let currentColor;

const attachEvent = () => {
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
};

clearButton.addEventListener("click", () => {
  allPixels.forEach((pixel) => {
    pixel.style.background = "white";
  });
});

loadGrid();
