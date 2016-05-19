var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 500, 500);
var imageObj = new Image();
imageObj.src="/game-ai-/images/tictactoe_board.png";
  imageObj.onload = function() {
    ctx=drawImage(imageObj,0,0,300,150)
  };
  function Tile(x,y) {
            var x= mouseX;var y= mouseY 
            var tile=Tile.Blank
            if(tile == null) {
              var _c= document.createElement("canvas");
              _c.width=_c.height=100;
              _ctx=_c.getContext("2d");
              _ctx.fillstyle="skyblue";
              _ctx.fillRect(0,0,100,100);
              Tile.Blank = new Image();
              Tile.Blank.src =_c.toDataUrl();
            }
            this.update= function(){
            };
            this.draw=function(ctx){
              _ctx.drawImage(tile,x,y);
            }
           }
           var data;
           function init(){
             data= new Tile(0,0);
           }
    
