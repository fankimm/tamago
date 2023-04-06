let p = {
  x: 30,
  y: 40,
  r: 20,
  vx: 0.8,
  vy: 1.3,
  color: "red",
};
const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 415;
const SCREEN_WIDTH = 151;
const SCREEN_HEIGHT = 158;
const SCREEN_OFFSET = { x: 104, y: 150 };
const SCREEN_COORDINATE = {};
const SCREEN_COLOR = "gray";
let bgImage;
let testImg;
function preload() {
  testImg = loadImage("test.gif");
  bgImage = loadImage("background.png");
}
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  image(bgImage, 0, 0);
  noFill();
  noStroke();
  smooth();
}
function draw() {
  fill(SCREEN_COLOR);
  translate(SCREEN_OFFSET.x, SCREEN_OFFSET.y);
  rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  fill(p.color);
  image(testImg, 0, 0);
}

const pingPong = () => {
  ellipse(p.x, p.y, p.r * 2, p.r * 2);

  if (p.x + p.r > SCREEN_WIDTH) {
    p.vx *= -1;
  }
  if (p.x - p.r < 0) {
    p.vx *= -1;
  }
  if (p.y + p.r > SCREEN_HEIGHT) {
    p.vy *= -1;
  }
  if (p.y - p.r < 0) {
    p.vy *= -1;
  }
  p.x += p.vx;
  p.y += p.vy;
};
