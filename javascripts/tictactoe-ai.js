var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);

ctx.beginPath();
ctx.fillStyle="#32EDF2";
ctx.arc(50, 50, 30, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();


