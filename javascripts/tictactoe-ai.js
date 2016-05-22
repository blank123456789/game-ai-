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
canvas.width = 600;
canvas.height = 600;
canvas.setAttribute('style', "position: absolute;  left: 50%;margin-left:-400px; top: 50%;margin-top:-300px; border:2px solid blue;z-index:4");
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

			

