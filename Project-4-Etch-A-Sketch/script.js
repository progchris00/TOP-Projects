const container = document.querySelector(".sketch-container");
const picker = document.querySelector(".picker-tool");
const clearButton = document.querySelector(".clearing-tool");
const sketchingArea = document.querySelector(".sketching-area");
const gridSizeSlider = document.querySelector(".grid-size-slider");
const gridCurrentSize = document.querySelector(".grid-current-size");
const eraserTool = document.querySelector(".erasing-tool");
const toolsContainer = document.querySelector(".tools");
const tools = toolsContainer.querySelectorAll("button");
const previousColorContainer = document.querySelector(
  ".previous-color-container"
);

let columnCount = 16;
let rowCount = 16;
let gridSize = columnCount * rowCount;

let allPixels;
let isDrawing = false;
let mouseDown = false;
let isErasing = false;
let eraserMode = false;
let rainbowMode = true;
let isRainbowMode = false;
let prevColorCount = 0;
let currentColor;

let documentColors = [];

let modes = [
  {
    id: "color",
    isActive: true,
    background: getPickerValue(),
  },
  {
    id: "rainbow",
    isActive: false,
    background: getRandomValue(),
  },
  {
    id: "eraser",
    isActive: false,
    background: "white",
  },
];

// tools.forEach((tool) => {
//   tool.addEventListener("click", () => {
//     modes.forEach((mode) => {
//       if (mode.id == tool.id) {
//         mode.isActive = true;
//       } else {
//         mode.isActive = false;
//       }
//     });
//   });
// });

tools.forEach((tool) => {
  tool.addEventListener("click", () => {
    modes.forEach((mode) => {
      mode.isActive = false;
    });

    let activeTool = document.getElementById(tool.id);
    activeTool.classList.add("active");

    let activeMode = modes?.find((mode) => mode.id === tool.id);
    activeMode.isActive = true;
    applyActive();
  });
});

function applyActive() {
  modes.forEach((mode) => {
    let currentTool = document.getElementById(mode.id);
    if (mode.isActive) {
      currentTool.classList.add("active");
    } else {
      currentTool.classList.remove("active");
    }
  });
}

const loadGrid = () => {
  gridSizeSlider.value = columnCount;
  for (let pixelCount = 0; pixelCount < gridSize; pixelCount++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel", pixelCount);
    pixel.style.width = `${100 / columnCount}%`;
    sketchingArea.appendChild(pixel);
  }

  allPixels = document.querySelectorAll(".pixel");
  // attachEvent();
};

gridSizeSlider.addEventListener("mousedown", () => {
  mouseDown = true;

  gridSizeSlider.addEventListener("mousemove", () => {
    if (mouseDown) {
      gridCurrentSize.textContent = `Grid Size: ${columnCount} x ${rowCount}`;
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

// const attachEvent = () => {
//   allPixels.forEach((pixel) => {
//     const max = 255;
//     let red = Math.floor(Math.random() * max);
//     let green = Math.floor(Math.random() * max);
//     let blue = Math.floor(Math.random() * max);

//     pixel.addEventListener("mousedown", () => {
//       if (rainbowMode) {
//         pixel.style.background = `rgb(${red}, ${green}, ${blue})`;
//         isRainbowMode = true;
//       } else if (eraserMode) {
//         pixel.style.background = "white";
//         isErasing = true;
//       } else {
//         currentColor = picker.value;
//         isDrawing = true;
//         pixel.style.background = currentColor;
//         addDocumentColor();
//       }
//     });

//     pixel.addEventListener("mouseover", () => {
//       if (isDrawing) {
//         pixel.style.background = currentColor;
//       } else if (isErasing) {
//         pixel.style.background = "white";
//       } else if (isRainbowMode) {
//         pixel.style.background = `rgb(${red}, ${green}, ${blue})`;
//       }
//     });

//     pixel.addEventListener("mouseup", () => {
//       isDrawing = false;
//       isErasing = false;
//       isRainbowMode = false;
//     });
//   });
// };

clearButton.addEventListener("click", () => {
  allPixels.forEach((pixel) => {
    pixel.style.background = "white";
  });
});

eraserTool.addEventListener("click", () => {
  if (eraserMode == false) {
    eraserMode = true;
  } else {
    eraserMode = false;
  }
});

const addDocumentColor = () => {
  if (!documentColors.includes(currentColor)) {
    documentColors.push(currentColor);
    const color = document.createElement("div");
    color.setAttribute("class", "previous-color");
    color.setAttribute("id", prevColorCount);
    color.style.background = currentColor;
    previousColorContainer.appendChild(color);
    color.addEventListener("click", selectColor);
    prevColorCount++;
  }
};

function selectColor(color) {
  picker.value = documentColors[color.target.id];
}

function getPickerValue() {}

function getRandomValue() {}

loadGrid();
