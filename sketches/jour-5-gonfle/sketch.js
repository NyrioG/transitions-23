window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
let strokeW = 20;
window.draw = function () {
  const objSize = min(width, height) / 2;

  const centerX = width / 2;
  const centerY = height / 2;
  background(255);
  fill(0);
  noStroke();
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
      circle(xPos, yPos, pointSize);
    }
  }
};
