function setup() {
  var board = createBoard(380,380);
  boardx = (windowWidth - width) / 2;
  boardy = ((windowHeight - height) / 2) + 100;
  board.position(boardx, boardy);
  var reloadButton = createButton("New Game");
  reloadButton.position(((windowWidth - width) / 2),boardy + 20);
  
  
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
