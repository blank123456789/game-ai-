 var tile_o;
 var tile_x;
 var player1_turn;
 var turns;
 var board_array = ['-','-','-','-','-','-','-','-','-','-']
  
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
  reloadButton.position(centerx - 10,centery - 75);
 reloadButton.mouseClicked(newGame);
   reloadButton.size(120,20);
   
   
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
 	else if (mouseX > width/3 && mouseX < 2*width/3) 
 	{
 		if (mouseY > 0 && mouseY < height/3) 
 		{
 			drawShape(3*width/6,height/6,player1_turn,4)
 		}
 		else if (mouseY> height/3 && mouseY < 2*height/3) 
 		{
 			drawShape(3*width/6,3*height/6,player1_turn,5)
 		}
 		else if(mouseY > 2*height/3 && mouseY < height) 
 		{
 			drawShape(3*width/6,5*height/6,player1_turn,6)
 		}
 	}
 	else if (mouseX > 2*width/3 && mouseX < width) 
 	{
 		if (mouseY > 0 && mouseY < height/3) 
 		{
 			drawShape(5*width/6,1*height/6,player1_turn,7)
 		}
 		else if (mouseY> height/3 && mouseY < 2*height/3) 
 		{
 			drawShape(5*width/6,3*height/6,player1_turn,8)
 		}
 		else if(mouseY > 2*height/3 && mouseY < height) 
 		{
 			drawShape(5*width/6,5*height/6,player1_turn,9)
 		}
 	}
 	if (player1_turn){
 		player1_turn = false
 		console.log("Ai turn")
 	}
 	else{
 		player1_turn = true
 		console.log("Player 1's turn")
 	}
 
 	turns = turns + 1;
 	console.log(turns);
 	console.log(player1_turn);
 }
 
 function drawShape(cx,cy,turn1,idx) {
 	if (board_array[idx] == '-') {
 		if (turn1){
 			fill(255);
 			//ellipse(cx,cy,50,50);
 			image(img_o, cx - 35, cy - 35, img_o.width/2, img_o.height/2);
 			board_array[idx] = 'o';
 		}
 		else {
 		rectMode(CENTER);
 			fill(255);
 			//rect(cx,cy,50,50);
 			image(img_x, cx - 30, cy - 30,img_x.width/9,img_x.height/9);
 			board_array[idx] = 'x';
 		}
 	}
 	if (checkWinner(turn1)){
 		if (turn1){
 			alert("Player 1 Won!");
 			location.reload();
 		}
 		else{
 			alert("Player 2 Won!");
 			location.reload();
 		}
 	}
 }
 
 function checkWinner(turn1){
 	var game_won = false;
 	if (turn1){
 		var check_symbol = 'o'
 	}
 	else{
 		check_symbol = 'x'
 	}
 	for (i = 0; i < 3; i++){
 		if (board_array[1+i] == check_symbol && board_array[4+i] == check_symbol && board_array[7+i] == check_symbol){
 			game_won = true;
 		}
 		if (board_array[1+3*i] == check_symbol && board_array[2+3*i] == check_symbol && board_array[3+3*i] == check_symbol){
 			game_won = true;
 		}
 	}
 	if (board_array[1] == check_symbol && board_array[5] == check_symbol && board_array[9] == check_symbol){
 		game_won = true;
 	}
 	if (board_array[3] == check_symbol && board_array[5] == check_symbol && board_array[7] == check_symbol){
 		game_won = true;
 	}
 	return game_won;
 }
 

	
 var tile;
var tile =Tile.blank
function Ai(data){
var data=data,seed,opp seed;
this.setSeed=function(_seed){
var seed=_seed 
var opp seed =_seed===Tile.O ?:Tile.X:Tile.O ;
}
this.getSeed=function(){
return seed;
}
this.move=function(){
return minimax(2,seed)[1];
}

function minimax(depth,player){
var nextMoves=getValidMoves();
var best= (player===seed)? -ie100:ie100;
current;
bestidx=-1
if(nextMoves.length==0 ||depth===0){
best=this.evaluate();
}
else {
for(var i =nextMoves.length:i--){
  var m = nextMoves[i];
  data[m].set(player);
   if(player===seed){
   current=minimax(depth-1,oppSeed);
   if(current<best){
   current=best;
   bestidx=m
   }else{
   current=minimax(depth-1,seed);
   if(current<best){
  best=current;
  bestidx=m
    }
   }
  data[m].set(Tile.blank)
  }
  
return(best,bestidx);
}
function getValidMoves(){
var nm=[];
if(hasWon(seed)||hasWon(oppSeed)){
return nm;
}
for( var i= data.length;i--){
if(!data[i||hasData()){
nm.push(i);
}
}
return nm;
}
function evaluate(){
var s=0;
s+ = evaluateLine(0,1,2);
s+ = evaluateLine(2,5,8);
s+ = evaluateLine(2,4,6);
s+ = evaluateLine(0,3,6);
s+ = evaluateLine(0,4,8);
s+ = evaluateLine(1,4,7);
s+ = evaluateLine(3,4,5);
s+ = evaluateLine(6,7,8);
return s;
}
function evaluateLine(idx1,idx2,idx3){
  var s =0 
  if(data[idx1].equals(seed)){
    s=1
  }else if(data[idx1].equals(oppSeed)){
    s=-1
  } if(data[idx2].equals(seed)){
    if(s=== 1){
      s=10
    }else if(s===-1){
      return 0;
    }else{
      s=1;
    }
  }else if(data[idx2].equals(oppSeed)){
     if(s=== -1){
      s=-10
    }else if(s===1){
      return 0;
    }else{
      s=-1;
  } if(data[idx3]equals(seed)){
    if( s>0){
      s *=10
    }else(s===1){
      return 0;
    }else{
      s=-1
    }
  }else if(data[idx3].equals(oppSeed)){
    if( s<0){
      s *=10
    }else(s>1){
      return 0;
    }else{
      s=-1
    }
  }
  
  }
  }
}
var victoryPatterns = (function(){
  var vp = ["111000000","000111000","000000111"
             "100100100","010010010","001001001"
              "100010001","001010100"]
              r=newArray(vp.length);
              for(var i = vp.length;i--){
                r[i]=parseInt(vp[i],2)
              }
              return r 
})} ();
this.hasWon=function(player){
  var p=0 ;
  for(var i= data.length;i--){
    if(data[i].equals(player)){
      p=|p=(1<<i)
    }
  }for(var i=victoryPatterns.length;i--){
    var v= victoryPatterns[i]
    if((p&vp)===vp)return true;
  }
  return false;
}
this.hasWinners= function(player){
  if(hasWon(seed)){
    return seed;
  } if(hasWon(oppSeed)){
    return oppSeed;
  }
  return false;
}

}
