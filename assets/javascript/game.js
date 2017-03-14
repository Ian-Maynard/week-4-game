// Setup routines - Variable initialization 
// disPlaytile(c); // Display gems 
// disPlaytile(s); // Display scores 
//  clear screen
// INIT multi-game variables
// var gameScores=0 
// prompt while playgame=true  {
// init game variables
// console.log("  "+targetNumber+"  " +userNumber+"  "+chrysOne+"  "+chrysTwo+"  "+chrysThr+"  "+chrysFou+"  ");

var targetNumber = Math.floor(Math.random() * ((120-19)+1)+19);
var userNumber = Math.floor(Math.random() * ((12-1)+1)+1);
var chrysOne= Math.floor(Math.random() * ((12-1)+1)+1);
var chrysTwo= Math.floor(Math.random() * ((12-1)+1)+1);
var chrysThr= Math.floor(Math.random() * ((12-1)+1)+1);
var chrysFou= Math.floor(Math.random() * ((12-1)+1)+1);








      while userNumber < targetNumber  {

//               // accept button1  input
//               // button value
            userNumber = userNumber + chrysOne;

//               // accept button2  input
            userNumber = userNumber + chrysTwo;

//               // accept button3  input
            userNumber = userNumber + chrysThr;
//               // accept button4  input
//               // increment Gamescore by chrystal
//               // button value


              if userNumber > targetNumber {
                gameResult(userNumber,targetnumber,playGame);
                playGame = false;
              }

              if userNumber = targetNumber {
                gameResult(userNumber,targetnumber,playGame);
                playGame = false;
              }


          }  // End current game loop 



}  // End Multigame loop 




function printScores(){
for (var i = 1; i <= (gameScores[i]-1); i++) {
    var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
       letterBtn.attr("data-letter", 'gameWord[i]');
       letterBtn.text("gameWord[i]");
       $("#buttons").append(letterBtn);
      }
}

function disPlaytile(){
// Assign print score default
$("#gems").empty(); // Clear the display area 
gemURL="";

    for (var i = 0; i <= 3; i++) {
      var GemBtn = $("<gems>");
          GemBtn.addClass("gem-button");
       	  GemBtn.attr("data-letter", gemUrl);
       	  $("#buttons").append(gemBtn);
// Generate and display current character
      }
 // Display Message
