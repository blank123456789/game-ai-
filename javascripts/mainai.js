var player,ai;
init();
function init(){
player=Tile.O
ai= new Ai();
ai.setSeed(player ===Tile.O ?:Tile.X:Tile.O );
function Ai(data){
var data=data,seed,opp seed;
this.setSeed=function(_seed){
var seed=_seed 
var opp seed =_seed===Tile.O ?:Tile.X:Tile.O ;
}
this.getSeed=function(){
return seed;
}
this.move=function(){
return minimax(2,seed)[1];
}

function minimax(depth,player){
var nextMoves=getValidMoves();
var best= (player===seed)? -ie100:ie100;
current;
bestidx=-1
if(nextMoves.length==0 ||depth===0){
best=this.evaluate();
}
else {
for(var i =nextMoves.length:i--){
  var m = nextMoves[i];
  data[m].set(player);
   if(player===seed){
   current=minimax(depth-1,oppSeed);
   if(current<best){
   current=best;
   bestidx=m
   }else{
   current=minimax(depth-1,seed);
   if(current<best){
  best=current;
  bestidx=m
    }
   }
  data[m].set(blank)
  }
  
return(best,bestidx);
}
function getValidMoves(){
var nm=[];
if(hasWon(seed)||hasWon(oppSeed)){
return nm;
}
for( var i= data.length;i--){
if(!data[i||hasData()){
nm.push(i);
}
}
return nm;
}
function evaluate(){
var s=0;
s+ = evaluateLine();
s+ = evaluateLine();
s+ = evaluateLine();
s+ = evaluateLine();
return s;
}
function evaluateLine(){
}
var victoryPatterns = (function(){
})} ();
this.hasWon=function(player){
}
}
