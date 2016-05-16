var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#2F13B6";
ctx.fillRect(0, 0, 600, 600);
var imageObj = new Image();

  imageObj.onload = function() {
    imageObj.src="/game-ai-/images/tictactoe_board.png";
    context.drawImage(imageObj,20,50);
  };
  
