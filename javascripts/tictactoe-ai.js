var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#2F13B6";
ctx.fillRect(0, 0, 80, 80);

var board = document.getElementByClass("board");
var xPos = pos.clientX;
var yPos = pos.clientY;
ctx.drawImage(board, xPos, yPos);
