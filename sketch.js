let p = {
  x: 30,
  y: 40,
  r: 20,
  vx: 0.8,
  vy: 1.3,
};
const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  noFill();
  noStroke();
  smooth();
}
function draw() {
  background(200, 141, 30);
  if (dist(p.x, p.y, mouseX, mouseY) < p.r) {
    fill(255, 200, 130);
  } else {
    fill(10, 20, 130);
  }

  ellipse(p.x, p.y, p.r * 2, p.r * 2);
  // fill(0, 0, 0);
  // ellipse(p.x, p.y, 10, 10);
  if (p.x + p.r > CANVAS_WIDTH) {
    p.vx *= -1;
  }
  if (p.x - p.r < 0) {
    p.vx *= -1;
  }
  if (p.y + p.r > CANVAS_HEIGHT) {
    p.vy *= -1;
  }
  if (p.y - p.r < 0) {
    p.vy *= -1;
  }
  p.x += p.vx;
  p.y += p.vy;
}
