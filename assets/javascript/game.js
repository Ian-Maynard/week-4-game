// Variable initialization 
// disPlaytile(c); // Display gems 
// disPlaytile(s); // Display scores 
//  clear Values
// INIT multi-game variables
// var gameScores=0 
// prompt while playgame=true  {
// init game variables
// console.log("  "+targetNumber+"  " +userScore+"  "+chrysOne+"  "+chrysTwo+"  "+chrysThr+"  "+chrysFou+"  ");


$(document).ready(function() {

var gameWins=0;
var gameLosses=0;
var playGame = false;


if (confirm("Do you want to Play Chrystals?" ) == true)
                  {
   playGame = true;
}

// This is the start of the overall game loop 

if (playGame==true)  {
console.log("PLay? "+playgame);
    var targetNumber = Math.floor(Math.random() * ((120-19)+1)+19);
    var userScore = 0;
    var chrysOne = Math.floor(Math.random() * ((12-1)+1)+1);
    var chrysTwo = Math.floor(Math.random() * ((12-1)+1)+1);
    var chrysThr = Math.floor(Math.random() * ((12-1)+1)+1);
    var chrysFou = Math.floor(Math.random() * ((12-1)+1)+1);

    disPlayCurrent(targetNumber,userScore,gameWins,gameLosses); 

          while (targetNumber < userScore) {
            
            // accept button1 input
            $("#billy1").on("click",function(){
            userScore = userScore + chrysOne;
            });

            // accept button2  input
            $("#billy2").on("click",function(){
            userScore = userScore + chrysTwo;
            });
            // accept button3  input
            $("#billy3").on("click",function(){
            userScore = userScore + chrysThr;
            });    
            // accept button4  input
            $("#billy4").on("click",function(){
            userScore = userScore + chrysFou;
            }); 

            decideEndGame();   //Decide to end the game or not

    }  // If loop





function decideEndGame(){
      disPlayCurrent(targetNumber,userScore,gameWins,gameLosses); 
      if (userScore > targetNumber) {
                      alert("YOU LOSE!");
                      gameLosses++;
                    }
      else if (userScore === targetNumber) {
              alert("YOU're MAHVELUS! You win!");
              console.log(userScore,targetNumber);
              gameWins++;     
                    }
}//End Function  

function disPlayCurrent(targetNumber,userScore,gameWins,gameLosses)  {
  $("#targetNum").text(targetNumber);
  $("#curTotal").text(userScore);
  $("#totWins").text(gameWins);
  $("#totLosses").text(gameLosses);
} // Display current totals 

}); // End function wrapper