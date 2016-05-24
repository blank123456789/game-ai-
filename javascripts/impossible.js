function setup() {
  var c = createCanvas(300,300);
  background(255);
}

function draw() {
  var shape = ellipse(x,y,10,10);
  shape.mouseOver(changePosition);
}

function changePosition() {
  x = random(1,299);
  y = random(1,299);
}
