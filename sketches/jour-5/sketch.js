let isColor = true; // Variable pour suivre le mode de couleur
let grid = []; // Tableau pour stocker les informations sur chaque cercle
let selectedCircle = null; // Variable pour suivre le cercle actuellement sélectionné

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);

  initializeGrid();
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
  initializeGrid();
};

let strokeW = 20;

function initializeGrid() {
  grid = [];
  const objSize = min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridCount = 5;
  const pointSize = strokeW;

  for (let x = 0; x < gridCount; x++) {
    for (let y = 0; y < gridCount; y++) {
      const xPos = map(
        x,
        0,
        gridCount - 1,
        centerX - objSize / 2,
        centerX + objSize / 2,
        x
      );
      const yPos = map(
        y,
        0,
        gridCount - 1,
        centerY - objSize / 2,
        centerY + objSize / 2,
        y
      );

      const isCenterCircle =
        x === Math.floor(gridCount / 2) && y === Math.floor(gridCount / 2);

      grid.push({
        x: xPos,
        y: yPos,
        size: pointSize,
        color: isCenterCircle ? color(0) : color(255),
      });

      if (isCenterCircle) {
        selectedCircle = grid[grid.length - 1];
      }
    }
  }
}

window.draw = function () {
  background(255);

  for (let i = 0; i < grid.length; i++) {
    const circleInfo = grid[i];

    if (
      dist(mouseX, mouseY, circleInfo.x, circleInfo.y) <
      circleInfo.size / 2
    ) {
      if (isColor) {
        circleInfo.color = color(0);
        // Mettre à jour le cercle sélectionné
        selectedCircle = circleInfo;
      } else {
        circleInfo.color = color(255);
      }
    }

    fill(circleInfo.color);
    noStroke();
    circle(circleInfo.x, circleInfo.y, circleInfo.size);
  }
};

// Événement de clic pour basculer entre les modes de couleur
window.mousePressed = function () {
  isColor = !isColor;
};
