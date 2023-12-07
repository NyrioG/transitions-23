window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

let strokeW = 20;
let shapes = [];

window.draw = function () {
  const objSize = min(width, height) / 2;

  const centerX = width / 2;
  const centerY = height / 2;
  background(255);
  noStroke();
  const gridCount = 5;
  const pointSize = strokeW;

  for (let x = 0; x < gridCount; x++) {
    for (let y = 0; y < gridCount; y++) {
      const xPos = map(
        x,
        0,
        gridCount - 1,
        centerX - objSize / 2,
        centerX + objSize / 2
      );
      const yPos = map(
        y,
        0,
        gridCount - 1,
        centerY - objSize / 2,
        centerY + objSize / 2
      );

      if (dist(mouseX, mouseY, xPos, yPos) < pointSize / 2) {
        shapes.push({
          x: xPos,
          y: yPos,
          size: 5,
          targetSize: objSize / gridCount + 18, // Double de la taille originale
        });
      } else {
        fill(0);
        noStroke(0);
        circle(xPos, yPos, pointSize);
      }
    }
  }

  for (let i = shapes.length - 1; i >= 0; i--) {
    let shape = shapes[i];

    fill(0);
    noStroke();
    square(shape.x, shape.y, shape.size);

    shape.size = lerp(shape.size, shape.targetSize, 0.1);

    if (shape.size >= shape.targetSize) {
      shapes.splice(i, 1);
    }
  }
};
