$(document).ready(function() {

  var randomNumber;
  var totalScore;
  // Trying out an object
  var winsLosses = {
    wins: 0,
    losses: 0,
    message: ""
  };
  var gem1;
  var gem2;
  var gem3;
  var gem4;
  var outcome = false;

  // From MDN: Function to generate a random number between two values, inclusive of min and max values
  function getRandomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  // Reset game function
  function resetGame() {
    randomNumber = getRandomNumber(19, 120);
    $('#random-number').html(randomNumber);
    gem1 = getRandomNumber(1, 12);
    gem2 = getRandomNumber(1, 12);
    gem3 = getRandomNumber(1, 12);
    gem4 = getRandomNumber(1, 12);
    $("#gem1").data('randomValue', gem1);
    $("#gem2").data('randomValue', gem2);
    $("#gem3").data('randomValue', gem3);
    $("#gem4").data('randomValue', gem4);
    totalScore = 0;
    $('#wins-losses').html("<p>" + winsLosses.message + "<p>" + 
      "<p>Wins: " + winsLosses.wins + "</p>" + 
      "<p>Losses: " + winsLosses.losses + "</p>" );

    // Console log values
    console.log("Message: " + winsLosses.message);
    console.log("Wins: " + winsLosses.wins);
    console.log("Losses: " + winsLosses.losses);
    console.log("New random number: " + randomNumber);
    console.log("Random number in html: " + $('#random-number').html());
    console.log("Gem values: " + gem1, gem2, gem3, gem4);
  }

  // End game function
  function endGame() {
    if (outcome === true) {
      winsLosses.wins++;
      winsLosses.message = "You Won!";
      resetGame();
    }
    else {
      winsLosses.losses++;
      winsLosses.message = "You Lost!";
      resetGame();
    }
  }

  resetGame();

  $(".gem").on("click", function() {
    var gemValue = parseInt($(this).data('randomValue'));
    totalScore = totalScore + gemValue;

    if (totalScore === randomNumber) {
      outcome = true;
      endGame();
    }
    else if (totalScore > randomNumber) {
      outcome = false;
      endGame();
    }
    $('#score').html(totalScore);
    console.log("Total Score: " + totalScore);
    });
});
