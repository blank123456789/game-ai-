var canvas = document.createElement('canvas');
canvas.id = "tictaccanvas";
canvas.width = 380;
canvas.height = 380;
canvas.setAttribute('style', "position:absolute;margin:auto;left:0%;top:25%;right:0%;bottom:0%;border:2px solid blue;z-index:2;background-color:white");
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

c = document.getElementById("tictaccanvas");
ctx = c.getContext("2d");

var drawTile = function(square) {
  var square = function() {
    if(square == "a1") {
      var x = 20;
      var y = 20;
    }
  }
  ctx.beginPath();
  ctx.lineWidth="10";
  ctx.fillStyle="blue";
  ctx.fillRect(x,y,100,100);
  ctx.stroke();
}

var draw = function() {
  drawTile(a1);
    
}

setInterval(draw,10)
