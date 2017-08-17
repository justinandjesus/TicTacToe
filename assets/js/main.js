function hideChoose(){
  $(".chooseOverlay").fadeOut(500);
  $(".selectOverlay").css("filter","blur(0px)");
}

function hideSelect(){
  $(".selectOverlay").fadeOut(500);
}

var boxes=$(".square");
var winner='';
var curr='';
var player1="X";
var player2="O";
var content=[];
var comPlay=true;
var winpatt=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


function getBoard(){
  content=[];
  for(i=0;i<boxes.length;i++){
    content.push(boxes[i].innerHTML);
  }
}

function gameOver(winner){
  endMessage= document.getElementById("endMessage");
  endMessage.innerHTML= winner!='' ? "Player " + winner+ " won the game!" : "It's a draw!";
  $(".overlay").css({"opacity":1, "display":"flex"});
}

function checkIfGameOver(){
  getBoard();
  aPlayerWon= winpatt.find(function(patt){
    if(content[patt[0]]!='' && content[patt[0]] === content[patt[1]] && content[patt[1]]=== content[patt[2]])
      return true;
  });
  if(content.indexOf('')==-1)
    gameOver('');
  else if(aPlayerWon!==undefined)
    curr==player1? gameOver(player2):gameOver(player1);
    
}


function singlePlayer(){
  
}


function doublePlayer(){
  for(var i=0;i<boxes.length;i++){
    boxes[i].onclick=function(e){
      if(e.srcElement.innerHTML===''){
        e.srcElement.innerHTML=curr;
        curr= player1===curr? player2: player1;
        // console.log("Changed to ", curr);
      }
      else{
        e.srcElement.setAttribute("class", "square animated shake");
        setTimeout(function(){ e.srcElement.setAttribute("class", "square");}, 500);
      }

      checkIfGameOver();
    }
  }
}









//If a '' is passed as parameter, it is a draw! Else winner is 'X' or 'O'


// for(i=0;i<boxes.length;i++){
  
//   boxes[i].onclick= function(e){
//     e.srcElement.innerHTML=='' ? e.srcElement.innerHTML=curr : comPlay=false;
//     answer= check();
    
//     if(answer){
//       winner=curr;
//       gameover(winner);
//     }
//     else if(comPlay)
//     {
//         curr = curr==player2 ? player1: player2;
//         var whetherRand=-1;
//         convertBoard();
//         for(i=0;i<winpatt.length;i++){
//           patt=winpatt[i];
          
//           if(content[patt[0]]!=='' && content[patt[0]] === content[patt[1]])
//             whetherRand= patt[2];
//           else if(content[patt[1]]!=='' && content[patt[1]] === content[patt[2]])
//             whetherRand= patt[0];
//           else if(content[patt[0]]!=='' && content[patt[0]] === content[patt[2]])
//             whetherRand= patt[1];
//           else
//             whetherRand= -1;
//         }
//         //   var whetherRand=$.each(winpatt,function(index, patt){
//         //   console.log("this is patt ",patt);
//         //   console.log(content[0]);
//         //     if(content[patt[0]]!=='' && content[patt[0]] === content[patt[1]])
//         //       return patt[2];
//         //     else if(content[patt[0]]!=='' && content[patt[1]] === content[patt[2]])
//         //       return patt[0];
//         //     else if(content[patt[0]]!=='' && content[patt[0]] === content[patt[2]])
//         //       return patt[1];
//         //     else
//         //       return false;
//         // });
//         // console.log("this is it : ", whetherRand);
//         if(whetherRand!=-1){
//           setTimeout(function(){ 
//             boxes[whetherRand].innerHTML=curr;
//             curr= curr==player2 ? player1: player2;
//           }, 600);
          
//           answer= check();

//           if(answer){
//             winner=curr;
//             gameover(winner);
//           }

//         }
//         else{
//             var freeSpaces=[];  
//           for(i=0;i<content.length;i++){
//               if(content[i]===''){
//               freeSpaces.push(i);  
//               }
//             }
//           setTimeout(function(){ 
//             boxes[freeSpaces[Math.floor(Math.random() * freeSpaces.length)]].innerHTML=curr;
//             curr= curr==player2 ? player1: player2;
//           }, 600);
//         }
      
//       }
    
//     else
//       comPlay=true;
//   }
// }

// function check(){
//   convertBoard();
  
//   return winpatt.find(function(patt){
//     if(content[patt[0]] === content[patt[1]] && content[patt[1]] === content[patt[2]]){
//       return content[patt[0]];
//     }
//     else if(content.indexOf('')==-1)
//       gameover('');
//     else
//       return false;
//   });
//   }

// function convertBoard(){
//   content=[];
//   for(i=0;i<boxes.length;i++){
//     content.push(boxes[i].innerHTML);
//   }
// }
// function gameover(winner){
//   endMessage= document.getElementById("endMessage");
//   endMessage.innerHTML=winner!='' ? "Player " + winner+ " won the game!" : "It's a draw!";
//   $(".overlay").css({"opacity":1, "display":"flex"});
// }