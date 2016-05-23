function setup() {
  var c = createCanvas(380, 380);
  cx = (windowWidth - width) / 2;
  cy = ((windowHeight - height) / 2) + 100;
  c.position(cx, cy);
  background(51);
  createBoard(380,380);
}
function createBoard(x,y){
	var board = createCanvas(x,y);
	background(255)
	for (i = 0; i < 4; i++)
	{
		line((i*x)/3,0,(i*x)/3,y);
	}
	for (i = 0; i < 4; i++)
	{
		line(0,(i*y)/3,x,(i*y)/3);
	}
	return board;
}

function draw() {
}
