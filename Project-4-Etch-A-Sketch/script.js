const container = document.querySelector(".sketch-container");
const picker = document.querySelector(".picker-tool");
const clearButton = document.querySelector(".clearing-tool");
const sketchingArea = document.querySelector(".sketching-area");
const gridSizeSlider = document.querySelector(".grid-size-slider");
const gridCurrentSize = document.querySelector(".grid-current-size");
const toolsContainer = document.querySelector(".tools");
const tools = toolsContainer.querySelectorAll("button");
const previousColorContainer = document.querySelector(
  ".previous-color-container"
);

let columnCount = 16;
let rowCount = 16;
let gridSize = columnCount * rowCount;

let allPixels;
let isMouseDown = false;
let prevColorCount = 0;
let currentColor;

let documentColors = [];

let modes = [
  {
    id: "color",
    isActive: true,
  },
  {
    id: "rainbow",
    isActive: false,
  },
  {
    id: "eraser",
    isActive: false,
  },
];

tools.forEach((tool) => {
  tool.addEventListener("click", () => {
    if (tool.id !== "clear") {
      modes.forEach((mode) => {
        let isModeActive = mode.id === tool.id ? true : false;
        mode.isActive = isModeActive;
      });
    }

    applyActive();
    attachEvent();
  });
});

function applyActive() {
  modes.forEach(({ id, isActive }) => {
    const currentTool = document.getElementById(id);
    currentTool.classList.toggle("active", isActive);
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
  attachEvent();
};

const attachEvent = () => {
  const activeMode = modes.find((mode) => mode.isActive === true);
  allPixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", () => {
      currentColor = getColorValue(activeMode.id);
      pixel.style.background = currentColor;
      isMouseDown = true;
      if (activeMode.id == "color") {
        addDocumentColor();
      }
    });

    pixel.addEventListener("mousemove", () => {
      if (isMouseDown) {
        pixel.style.background = getColorValue(activeMode.id);
      }
    });

    pixel.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
  });
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

clearButton.addEventListener("click", () => {
  allPixels.forEach((pixel) => {
    pixel.style.background = "white";
  });
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

function getColorValue(id) {
  if (id === "color") {
    return picker.value;
  } else if (id === "rainbow") {
    const max = 255;
    let red = Math.floor(Math.random() * max);
    let green = Math.floor(Math.random() * max);
    let blue = Math.floor(Math.random() * max);
    return `rgb(${red}, ${green}, ${blue})`;
  } else {
    return "white";
  }
}

loadGrid();
