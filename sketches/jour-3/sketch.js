import { SpringNumber } from "../../shared/spring.js";

const spring = new SpringNumber({
  position: 0, // start position
  frequency: 4.5, // oscillations per second (approximate)
  halfLife: 0.15, // time until amplitude is halved
});

let targetSize = 20; // Initial target size

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.mousePressed = function () {
  // Set a new target size when the mouse is pressed
  const sceneSize = min(width, height);
  const objSize = sceneSize / 2;
  const gridCount = 1 + floor((mouseX / width) * 5);
  targetSize = map(gridCount, 1, 5, objSize, 20);
};

window.draw = function () {
  background(255);

  const sceneSize = min(width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = sceneSize / 2;
  const halfWidth = objSize / tan(60);
  const strokeW = 20;

  fill(0);
  noStroke();
  const gridCount = 1 + floor((mouseX / width) * 5);

  spring.target = targetSize; // Set the spring target to the updated targetSize
  spring.step(deltaTime / 1000); // deltaTime is in milliseconds, we need it in seconds

  for (let x = 1; x <= gridCount; x++) {
    const xPos = map(x, 0, gridCount + 1, centerX - objSize, centerX + objSize);
    circle(xPos, centerY, spring.position);
  }
};
