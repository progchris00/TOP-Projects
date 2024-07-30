const container = document.querySelector(".sketch-container");
const picker = document.querySelector(".picker-tool");
const clearButton = document.querySelector(".clearing-tool");
const sketchingArea = document.querySelector(".sketching-area");
const gridSizeSlider = document.querySelector(".grid-size-slider");
const gridCurrentSize = document.querySelector(".grid-current-size");
const eraserTool = document.querySelector(".erasing-tool");

let columnCount = 16;
let rowCount = 16;
let gridSize = columnCount * rowCount;
let allPixels;
let isDrawing = false;
let mouseDown = false;
let isErasing = false;
let eraserMode = false;
let currentColor;

const loadGrid = () => {
  for (let pixelCount = 0; pixelCount < gridSize; pixelCount++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel", pixelCount);
    pixel.draggable = false;
    pixel.style.width = `${100 / columnCount}%`;
    sketchingArea.appendChild(pixel);
  }

  allPixels = document.querySelectorAll(".pixel");
  attachEvent();
};

gridSizeSlider.addEventListener("mousedown", () => {
  mouseDown = true;

  gridSizeSlider.addEventListener("mousemove", () => {
    if (mouseDown) {
      gridCurrentSize.textContent = `Grid count: ${columnCount} x ${rowCount}`;
      columnCount = gridSizeSlider.value;
      rowCount = gridSizeSlider.value;
      gridSize = columnCount * rowCount;
      sketchingArea.innerHTML = "";
      loadGrid();
    }

    gridSizeSlider.addEventListener("mouseup", () => {
      mouseDown = false;
    });
  });
});

const attachEvent = () => {
  allPixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", () => {
      if (eraserMode) {
        pixel.style.background = "white";
        isErasing = true;
      } else {
        currentColor = picker.value;
        isDrawing = true;
        pixel.style.background = currentColor;
      }
    });

    pixel.addEventListener("mouseover", () => {
      if (isDrawing) {
        pixel.style.background = currentColor;
      }

      if (isErasing) {
        pixel.style.background = "white";
      }
    });

    pixel.addEventListener("mouseup", () => {
      isDrawing = false;
      isErasing = false;
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

eraserTool.addEventListener("click", () => {
  eraserMode = true;
  eraserTool.classList.toggle("active");
});

loadGrid();
