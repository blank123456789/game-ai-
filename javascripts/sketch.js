function setup() {
	var centerx = (windowWidth - width) / 2;
	var centery = (windowHeight - height) / 2;
  var board = createBoard(380,380);
  boardx = (windowWidth - width) / 2;
  boardy = ((windowHeight - height) / 2) + 100;
  board.position(boardx, boardy);
  board.mouseClicked(takeTurn);
  player1_turn = turn;
  turns = 0;
  var reloadButton = createButton("New Game");
  reloadButton.position(centerx - 11.5,centery - 75);
  reloadButton.mouseClicked(newGame);
  reloadButton.size(120,20);
  
  console.log(turns);

}

function newGame = function() {
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
	turns++;
	player1_turn = false;
}

function draw() {
}
