function hideChoose(){
  $(".chooseOverlay").fadeOut(500);
  $(".selectOverlay").css("filter","blur(0px)");
  if(!singlePlayer){
      $(".selectOverlay").children()[0].innerHTML="Player 1 choose your symbol!";
  }    
    
}

function hideSelect(){
  $(".selectOverlay").fadeOut(500);
  player1=curr;
  player2 = curr==='X'? 'O': 'X';
}

var singlePlayer=false;
var boxes=$(".square p");
var winner='';
var curr='';
var player1="X";
var player2="O";
var content=[];
var comPlay=true;
var winpatt=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var over=false;
var overwriting=false;

console.log(boxes);
startGame();

function startGame(){
    for(var i=0;i<boxes.length;i++){
      boxes[i].onclick=function(e){
        if(e.srcElement.innerHTML===''){
          e.srcElement.innerHTML=curr;
          curr= player1===curr? player2: player1;
            overwriting=false;
          // console.log("Changed to ", curr);
        }
        else{
            overwriting=true;
            e.srcElement.setAttribute("class", "animated shake");
            setTimeout(function(){ e.srcElement.setAttribute("class", "");}, 500);
        }
        
            if(!overwriting){
               if(!over)  
                checkIfGameOver();

                if(singlePlayer){
                    if(!over)
                        setTimeout(computerPlay, 600);
            }
        }
      }
    }
}

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
  over=true;
}

function checkIfGameOver(){
  getBoard();
    console.log(content);
  aPlayerWon= winpatt.find(function(patt){
    if(content[patt[0]]!='' && content[patt[0]] === content[patt[1]] && content[patt[1]]=== content[patt[2]])
      return true;
  });
    console.log(aPlayerWon);
  if(content.indexOf('')==-1 && aPlayerWon===undefined)
    gameOver('');
  else if(aPlayerWon!==undefined)
    curr==player1? gameOver(player2):gameOver(player1);
}

function computerPlay(){
  getBoard();
  var potentialIndex=-1;
  var potentialWinner=false;
  for(var i=0;i<winpatt.length;i++){
    patt=winpatt[i];
    if(content[patt[0]]!='' && content[patt[2]]=='' && (content[patt[0]] === content[patt[1]]))
    {
      potentialIndex=patt[2];
      potentialWinner= true;
    }
    else if(content[patt[1]]!='' && content[patt[0]]=='' && content[patt[1]]=== content[patt[2]])
    {
      potentialIndex=patt[0];
      potentialWinner= true;
    }
    else if(content[patt[0]]!='' && content[patt[1]]=='' && content[patt[0]]=== content[patt[2]])
    {
      potentialIndex=patt[1];
      potentialWinner= true;
    }
  }
    
  //COMPUTER PLAYS A RANDOM OR STRATEGIC MOVE
    
  if(potentialWinner)
    boxes[potentialIndex].innerHTML=curr;
  else{ //if no potential threat yet computer still has to play
      for(var i=0;i<content.length;i++){
          if(content[i]===''){
              boxes[i].innerHTML=curr;
              break;
          }
      }
  }
  curr= player1===curr? player2: player1;
  if(content.indexOf('')==-1 && aPlayerWon===undefined)
    gameOver('');
  else
    checkIfGameOver();
  
}
