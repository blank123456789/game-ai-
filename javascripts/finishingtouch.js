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
