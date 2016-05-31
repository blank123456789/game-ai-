var State = function(old){
  this.turn = "";
  this.oMovescount="0";
  this.result="still running "
  this.board=[];
  
  if(typeof old!=="undefined"){
    var len = old.board.length;
    this.board =newArray(len);
    for(var itr=0;itr<len;itr++){
      this.board[itr]=old.board[itr];
    }
   this.turn = old.turn;
  this.oMovescount=old.oMovescount;
  this.result=old.result;
  this.advanceTurn= function(){
    this.turn==this.turn=="X"?"O";"X";
  }
  this.emptyCells=function(){
  var indxs=[]
   for(var itr=0;itr<9;itr++){
      if(this.board[itr]==="E"){
        indxs.push(itr);
      }
    }
  } 
  }
  return indxs
}this.isTerminal = function() {
        var B = this.board;

       
        for(var i = 0; i <= 6; i = i + 3) {
            if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
                this.result = B[i] + "-won"; 
                return true;
            }
        }

           
        for(var i = 0; i <= 2 ; i++) {
            if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                this.result = B[i] + "-won"; 
                return true;
            }
        }

   
        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
                this.result = B[i] + "-won"; 
                return true;
            }
        }

        var available = this.emptyCells();
        if(available.length == 0) {
           
            this.result = "draw"; 
            return true;
        }
        else {
            return false;
        }
    };

};
var AiAction= function (pos){
  this.movePosition=pos 
  this.Minimax value= 0
  this.Apply to= function(state){
    var nextMove= new State(state)
}
}
AiAction.DESCENDING =function(first action,second action){
  if(first action>second action)
    return = -1 ;
else(first action<second action )
return = 1
else 
return = 0 
}
AiAction.ASCENDING = function(first action,second action){
  if(first action<second action)
    return = -1 ;
else(first action>econd action )
return = 1
else 
return = 0 
}
var Game = function(autoPlayer) {

  
    this.ai = autoPlayer;

   
    this.currentState = new State();

    
    this.currentState.board = ["E", "E", "E",
                               "E", "E", "E",
                               "E", "E", "E"];

    this.currentState.turn = "X"; /st

    
    this.status = "beginning";

    
    this.advanceTo = function(_state) {
        this.currentState = _state;
        if(_state.isTerminal()) {
            this.status = "ended";

            if(_state.result === "X-won")
               
                ui.switchViewTo("won");
            else if(_state.result === "O-won")
                
                ui.switchViewTo("lost");
            else
               
                ui.switchViewTo("draw");
        }
        else {
            
            
            if(this.currentState.turn === "X") {
                ui.switchViewTo("human");
            }
            else {
 ui.switchViewTo("robot");

         this.ai.notify("O");
            }
        }
    };

 this.start = function() {
if(this.status = "beginning") {
  this.advanceTo(this.currentState
  this.status = "running";
        }
    }

};


Game.score= function(_state) {
  if (state.result !== "still running"){
    if (state.result !== "O won"){
      return = 10 - _state.oMovescount;
    }
    else(state.result !== "x won"){
      return = -10 + _state.oMovescount;
    }
      else(state.result!="draw"){
      return = 0 
      }
      }
}
var Action= function (pos){
  this.movePosition=pos 
  this.Minimax value= 0
  this.Apply to= function(state){
    var nextMove= new State(state)
}
next.turn(this.movePosition)= state.turn
if (state.turn="o");
next.oMovecount++;
then(next.turn=="x");
}
}
function minimaxvalue(state){
   if (state.isTerminal){
     return Game.score(state)
   }
   var stateScore=
   if(state.Turn=="X"){
     return Game.score == 1000
     else {
       return State.score == -1000 
     }
     var availablePositions = state.emptyCells();
     var availableNextStates = availablePositions.map(function(pos)) {
       var action = new AIAction(pos);
       var nextState = action.applyTo(state);
       return nextState;
     }
     availableNextStates.forEach(function(NextState)){
       var nextScore =minimaxValue(NextState);
       if( state.turn == "X"){
         if(nextScore>stateScore)
         nextScore=stateScore;
       }
       else {
         if(stateScore > nextScore)
         stateScore=nextScore;
        });
        return stateScore;
      function takeMove(turn){
        var availablePositions= game.currentState.emptyCells();
        var availableNextState = availablePosition.map(function(pos)) {
          var action= new AIACtion(pos);
          var nextState = action.applyTo(game.currentState);
          action.minimaxVal = minimaxValue(nextState);
          return action;
        }
        if(turn =="X")
        availableActions.sort(AIAction.DESCENDING);
        else
        availableActions.sort(AIAction.ASCENDING);
         var chosenAction=availableAction[0];
         var next = chosenAction.applyTo(game.currentState);
         ui.insertat(chosenAction.movepositon,turn);
      }
      
     }
  
     
   }
  
     
   }
   
 }
 
