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
      }
      
     }
  
     
   }
  
     
   }
   
 }
 
