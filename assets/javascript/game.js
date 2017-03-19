// console.log("  "+targetNumber+"  " +userScore+"  "+chrysOne+"  "+chrysTwo+"  "+chrysThr+"  "+chrysFou+"  ");
$(document).ready(function() {

            var gameWins = 0;
            var gameLosses = 0;
            var playGame = 0;

            function disPlayCurrent(targetNumber, userScore, gameWins, gameLosses) {
                $("#targetNum").text(targetNumber);
                $("#curTotal").text(userScore);
                $("#totWins").text(gameWins);
                $("#totLosses").text(gameLosses);
            } // Display current totals 

            function decideEndGame() {
                disPlayCurrent(targetNumber, userScore, gameWins, gameLosses);
                if (userScore > targetNumber) {
                    alert("YOU LOSE!");
                    gameLosses++;
                } else if (userScore == targetNumber) {
                    alert("YOU're MAHVELUS! You win!");
                    console.log(userScore, targetNumber);
                    gameWins++;
                }

            } //End Function  



            if (confirm("Do you want to Play Chrystals?") == true) {
                playGame = 1;
            }

            // This is the start of the overall game loop 

            if (playGame == 1) {

                var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
                var userScore = 0;
                var chrysOne = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
                var chrysTwo = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
                var chrysThr = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
                var chrysFou = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

                disPlayCurrent(targetNumber, userScore, gameWins, gameLosses);

                if (userScore < targetNumber) {

                    // accept button1 input
                    $("#billy1").on("click", function() {
                        userScore = userScore + chrysOne;
                    });

                    // accept button2  input
                    $("#billy2").on("click", function() {
                        userScore = userScore + chrysTwo;
                    });
                    // accept button3  input
                    $("#billy3").on("click", function() {
                        userScore = userScore + chrysThr;
                    });
                    // accept button4  input
                    $("#billy4").on("click", function() {
                        userScore = userScore + chrysFou;
                    });

                 console.log("  "+targetNumber+"  " +userScore+"  "+chrysOne+"  "+chrysTwo+"  "+chrysThr+"  "+chrysFou+"  ");

                } // If loop

                  decideEndGame(); //Decide to end the game or not
        }

});
      