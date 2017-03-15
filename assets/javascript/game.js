// Setup routines - Variable initialization 
// disPlaytile(c); // Display gems 
// disPlaytile(s); // Display scores 
//  clear Values
// INIT multi-game variables
// var gameScores=0 
// prompt while playgame=true  {
// init game variables
// console.log("  "+targetNumber+"  " +userNumber+"  "+chrysOne+"  "+chrysTwo+"  "+chrysThr+"  "+chrysFou+"  ");


$(document).ready(function() {

var gameWins=0;
var gameLosses=0;
var playGame= false;


// This is the start of the current game loop 

if (confirm("Do you want to Play Chrystals?" ) == true){
   playGame = true;
   console.log("1 Play Game is: ",playGame);
}


if (playGame==true) {

   console.log("2 Play Game is: ",playGame);

    var targetNumber = Math.floor(Math.random() * ((120-19)+1)+19);
    var userNumber = 0;
    var chrysOne = Math.floor(Math.random() * ((12-1)+1)+1);
    var chrysTwo = Math.floor(Math.random() * ((12-1)+1)+1);
    var chrysThr = Math.floor(Math.random() * ((12-1)+1)+1);
    var chrysFou = Math.floor(Math.random() * ((12-1)+1)+1);
    var letterBtn = $("<button>");
    

      if (userNumber < targetNumber)  {

        //display current totals 

            $("div.targetNum").text(targetNumber);
            $("div.curTotal").text(userNumber);
            $("div.winLoss").text("Wins: "+gameWins+" / "+" Losses: "+gameLosses);


            
               // accept button1  input
            $("#billy1").on("click",function(){
            userNumber = userNumber + chrysOne;
            console.log(" 3 Billy 1");
            });
            // accept button2  input
            $("#billy2").on("click",function(){
            userNumber = userNumber + chrysTwo;
            console.log("Billy 2");
            });
            // accept button3  input
            $("#billy3").on("click",function(){
            userNumber = userNumber + chrysThr;
            console.log("Billy 3");
            });    
            // accept button4  input
            $("#billy4").on("click",function(){
            userNumber = userNumber + chrysFou;
            console.log("Billy 4");
            }); 


            if (userNumber > targetNumber) {
                alert("YOU LOSE!");
                gameLosses++;
              }

            if (userNumber = targetNumber) {
                 alert("YOU're MAHVELUS! You win!");
                 console.log(userNumber,targetNumber);
                 gameWins++;     
              }

          }  // End current game loop 

          if (confirm("Do you want to keep playing?" ) =! true){
            playGame = false;
            console.log("1 Play Game is: ",playGame);
            }

}

}  // End Multigame loop 

} // End of function wrapper