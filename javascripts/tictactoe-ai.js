var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#2F13B6";
ctx.fillRect(0, 0, 600, 600);
var imageObj = new Image();
imageObj.src="/game-ai-/images/tictactoe_board.png";
  imageObj.onload = function() {
    ctx.drawImage(imageObj,90,0,150,175)  };
  
