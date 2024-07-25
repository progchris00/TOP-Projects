const container = document.querySelector(".container");

const rowTotalCount = 16;
const columnTotalCount = 16;
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

const allPixels = document.querySelectorAll(".pixel");

allPixels.forEach((pixel) => {
  pixel.addEventListener("mousedown", () => {
    isDrawing = true;
    pixel.style.background = "black";
  });

  pixel.addEventListener("mouseover", () => {
    if (isDrawing) {
      pixel.style.background = "black";
    }
  });

  pixel.addEventListener("mouseup", () => {
    isDrawing = false;
  });
});
