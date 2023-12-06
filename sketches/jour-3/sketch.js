let shapeId = 0;
let strokeW = 10;
let objSize = 50; // Remplacez cette valeur par la taille souhaitée

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = function () {
  fill(0);
  noStroke();
  const gridCount = 5;
  const pointSize = strokeW;

  for (let x = 0; x < gridCount; x++) {
    for (let y = 0; y < gridCount; y++) {
      const xPos = map(
        x,
        0,
        gridCount - 1,
        width / 2 - objSize / 2,
        width / 2 + objSize / 2
      );
      const yPos = map(
        y,
        0,
        gridCount - 1,
        height / 2 - objSize / 2,
        height / 2 + objSize / 2
      );
      circle(xPos, yPos, pointSize);
    }
  }
};

// function mousePressed() {

// }
