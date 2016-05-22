/*var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);

ctx.beginPath();
ctx.fillStyle="#32EDF2";
ctx.fillRect(34.375,34.375,125,62.5);
ctx.stroke();
ctx.closePath();
*/

var canvas = document.createElement('canvas');
canvas.id = "tictaccanvas";
canvas.width = 100;
canvas.height = 100;
canvas.style.border = "1px solid";
canvas.style.position = "absolute";
canvas.style.margin = "auto";
canvas.setAttribute('style', "left: 0px;top: 0px;");
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

			

