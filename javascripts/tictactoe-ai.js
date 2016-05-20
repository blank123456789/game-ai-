var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 400, 400);


ctx.beginPath();
ctx.lineWidth="6";
ctx.strokeStyle="red";
ctx.rect(5,5,290,140); 
ctx.stroke();
