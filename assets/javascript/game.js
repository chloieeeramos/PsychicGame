var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessMade = [];
var userGuess = document.onkeypress;
var compGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeypress= function (event) {
  
  userGuess = event.key;
  guessMade.push(userGuess);

  if (compGuess == userGuess) {
    wins++;
    guessLeft = 9;
    guessMade = [];
  }
  
  if (compGuess != userGuess) {
    guessLeft--;
    
  }

  if (guessLeft == 0) {
    losses++;
    guessLeft = 9;
    guessMade = [];
  }

  var html =
    '<p><h1>The Psychic Game</h1></p>' +
    '<p>Guess what letter I am thinking of!</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses Left: ' + guessLeft + '</p>' +
    '<p>Your Guesses So Far: ' + guessMade + '</p>';
    
    document.getElementById("container").innerHTML = html;
}