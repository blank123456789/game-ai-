 var tile;
var tile =Tile.blank
var Ai_player;

var Ai_player = function Ai(data){
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
  data[m].set(Tile.blank)
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
s+ = evaluateLine(0,1,2);
s+ = evaluateLine(2,5,8);
s+ = evaluateLine(2,4,6);
s+ = evaluateLine(0,3,6);
s+ = evaluateLine(0,4,8);
s+ = evaluateLine(1,4,7);
s+ = evaluateLine(3,4,5);
s+ = evaluateLine(6,7,8);
return s;
}
function evaluateLine(idx1,idx2,idx3){
  var s =0 
  if(data[idx1].equals(seed)){
    s=1
  }else if(data[idx1].equals(oppSeed)){
    s=-1
  } if(data[idx2].equals(seed)){
    if(s=== 1){
      s=10
    }else if(s===-1){
      return 0;
    }else{
      s=1;
    }
  }else if(data[idx2].equals(oppSeed)){
     if(s=== -1){
      s=-10
    }else if(s===1){
      return 0;
    }else{
      s=-1;
  } if(data[idx3]equals(seed)){
    if( s>0){
      s *=10
    }else(s===1){
      return 0;
    }else{
      s=-1
    }
  }else if(data[idx3].equals(oppSeed)){
    if( s<0){
      s *=10
    }else(s>1){
      return 0;
    }else{
      s=-1
    }
  }
  
  }
  }
}
var victoryPatterns = (function(){
  var vp = ["111000000","000111000","000000111"
             "100100100","010010010","001001001"
              "100010001","001010100"]
              r=newArray(vp.length);
              for(var i = vp.length;i--){
                r[i]=parseInt(vp[i],2)
              }
              return r 
})} ();
this.hasWon=function(player){
  var p=0 ;
  for(var i= data.length;i--){
    if(data[i].equals(player)){
      p=|p=(1<<i)
    }
  }for(var i=victoryPatterns.length;i--){
    var v= victoryPatterns[i]
    if((p&vp)===vp)return true;
  }
  return false;
}
this.hasWinners= function(player){
  if(hasWon(seed)){
    return seed;
  } if(hasWon(oppSeed)){
    return oppSeed;
  }
   return false;
   console.log(Ai_player);
}

}

