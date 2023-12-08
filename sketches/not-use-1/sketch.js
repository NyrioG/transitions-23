import { SpringNumber } from "../../shared/spring.js";

const spring = new SpringNumber({
  position: 10, // start position
  frequency: 4.5, // oscillations per second (approximate)
  halfLife: 0.15, // time until amplitude is halved
});

let isMousePressed = false;
let convergeSpeed = 2;

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.mousePressed = function () {
  isMousePressed = true;
};

window.mouseReleased = function () {
  isMousePressed = false;
};

let addition = 0;

let stage = 0;

window.draw = function () {
  background(255);

  spring.step(deltaTime / 1000);
  var x = spring.position;

  const sceneSize = min(width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = sceneSize / 2;
  const strokeW = objSize / 20;

  switch (stage) {
    case 0:
      fill(0);
      noStroke();
      rectMode(CENTER);
      strokeWeight(strokeW);
      stroke(0);

      line(
        centerX - objSize / 2 - addition,
        centerY,
        centerX + objSize / 2 + addition,
        centerY
      );
      line(
        centerX,
        centerY - objSize / 2 - addition,
        centerX,
        centerY + objSize / 2 + addition
      );

      if (isMousePressed) {
        addition -= 1;

        if (addition <= -objSize / 2) {
          stage = 1;
        }
      } else {
        if (addition >= 0) {
          addition = addition * 0;
          return;
        } else {
          addition += 1;
        }
      }
      console.log(addition);
      break;
    case 1:
      spring.target = 50;
      ellipse(centerX, centerY, x, x);
      break;
  }
};
