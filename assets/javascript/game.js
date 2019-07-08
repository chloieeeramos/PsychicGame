var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var wins = 0;
        var losses = 0;
        var numGuesses = 9;
        var guessChoices = [];
        
        //added array for pressed keys
        var pressed = [];


        var compGuess=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        function newLetter(){
            compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
            console.log(compGuess);
        }

        //calling the function to start here
        newLetter();

        document.onkeypress = function(event) {

            var userGuess = event.key;
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            

            console.log(userGuess)
            //in this case, the event key will appear to the page
            document.getElementById('letters').innerHTML += userGuess + ", ";

                if(compGuess == userGuess){
                console.log("one point")
                //now every time a user get a point, there will be a new letter because of the function
                
                newLetter();
                }
                
                else{
                console.log("try again")
                }
        
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            

            if (options.indexOf(userGuess) > -1) {

                if (userGuess === compGuess) {
                     wins++;
                     numGuesses = 9;
                     guessChoices = [];
                }

            if (userGuess !== compGuess) {
                     numGuesses --;
                     guessChoices.push(userGuess);
                }

            if (numGuesses === 0) {

                     numGuesses = 9;
                     losses ++;
                     guessChoices = [];

               
                }

            }

        };