
function setup() {
	var centerx = (windowWidth - width) / 2;
	var centery = (windowHeight - height) / 2;
  var board = createBoard(380,380);
  boardx = (windowWidth - width) / 2;
  boardy = ((windowHeight - height) / 2) + 100;
  board.position(boardx, boardy);
  board.mouseClicked(takeTurn);
  player1_turn = true;
  turns = 0;
  var reloadButton = createButton("New Game");
  reloadButton.position(centerx - 11.5,centery - 75);
  reloadButton.mouseClicked(newGame);
  reloadButton.size(120,20);
  
  console.log(turns);
  console.log(player1_turn);

}

function newGame() {
	location.reload();
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

function takeTurn() {
	if (mouseX > 0 && mouseX < width/3) {
		if (mouseY > 0 && mouseY < height/3) 
		{
			drawShape(width/6,height/6,player1_turn,1)
		}
		else if (mouseY > height/3 && mouseY < 2*height/3) 
		{
			drawShape(width/6,3*height/6,player1_turn,2)
		}
		else if(mouseY > 2*height/3 && mouseY < height) 
		{
			drawShape(width/6,5*height/6,player1_turn,3)
		}
	}
}

function draw() {
}
