var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#2F13B6";
ctx.fillRect(0, 0, 600, 600);
var board = document.getElementByClass("board");
var ctx = board.getContext("2d");
ctx.drawImage(board, 10, 10);

