var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);

ctx.beginPath();
ctx.fillStyle="#32EDF2";
ctx.fillRect(5,5,100,100); 
ctx.stroke();
ctx.closePath
