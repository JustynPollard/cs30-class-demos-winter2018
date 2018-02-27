// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    let x = random(width);
    let y = random(height);
    triangle(x, y, x - 50, y + 150, x + 50, y + 150);
  }

  if (keyIsPressed && (key === "z" || key === "x")) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 25, 25);
  }
}
