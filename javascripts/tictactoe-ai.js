var canvas = document.createElement('canvas');
canvas.id = "tictaccanvas";
canvas.width = 380;
canvas.height = 380;
canvas.setAttribute('style', "position:absolute;margin:auto;left:0%;top:25%;right:0%;bottom:0%;border:2px solid blue;z-index:2;background-color:white");
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

c = document.getElementById("tictaccanvas");
ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="blue";
ctx.rect(50,50,150,80);
ctx.stroke();
			

