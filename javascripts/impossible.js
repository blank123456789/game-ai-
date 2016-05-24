var x;
var y;

function setup() {
  var c = createCanvas(300,300);
  background(255);
}

function draw() {
  x = 150;
  y = 150;
  var shape = ellipse(x,y,10,10);
  shape.mouseClicked(changePosition);
}

function changePosition() {
  x = random(1,299);
  y = random(1,299);
  return x;
  return y;
}
