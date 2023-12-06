let shapeId = 0;

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = function () {
  background(255);

  const sceneSize = min(width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = sceneSize / 2;
  const strokeW = objSize / 20;

  fill(0);
  noStroke();
  rectMode(CENTER);
  strokeWeight(strokeW);
  stroke(0);
  line(centerX - objSize / 2, centerY, centerX + objSize / 2, centerY);
  line(centerX, centerY - objSize / 2, centerX, centerY + objSize / 2);
};
