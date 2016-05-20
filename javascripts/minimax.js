for (i=0,c = [],d = []; i<grid,i++)
for (j=0,a = [],b = []; j<grid,j++)
{
  a.push(i*grid+j); 
  b.push(j*grid+i); 
}
combo.push(a,b)
c.push(i*grid*i);
d.push((grid-i-1)*grid+1);

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
   }
  
     
   }
   
 }
 
