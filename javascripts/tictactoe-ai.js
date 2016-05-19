var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 500, 500);
var imageObj = new Image();
imageObj.src="/game-ai-/images/tictactoe_O.png";
  imageObj.onload = function() {
    ctx.drawImage(imageObj1,0,0,100,100)
  };
