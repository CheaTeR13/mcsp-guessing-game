function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

var correctAns = getRandomIntInclusive(1, 100);
var correct = false;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

var correctAns = 50;//getRandomIntInclusive(1, 100);
var correct = false;
var name = prompt('Enter your name, please:')

var guess = prompt("Guess a number from 1-100")
var attempts = [];



function game(){
    while(correct === false){
        if(correctAns === parseInt(guess)){
            attempts.push(guess);
            alert(`That's correct, ${name}! The answer was ${correctAns}. You got it right in ${attempts.length}. These are your guesses: ${attempts.join()}.`);
            correct = true;
            var playAgain = prompt(`Do you want to play again? Y/N`)
            var tryAgain = false;
            while(tryAgain === false){
                if(playAgain === `Y`){
                    attempts = [];
                    correctAns = 40;
                    tryAgain = true;
                    guess = prompt("Guess a number from 1-100");
                    correct = false;
                    game();
            }else if(playAgain ===(`N`||`n`)){
                alert(`Thank you for playing!`);
                correct = true;
                tryAgain = true;
            }else{
                alert(`Sorry, I don't understand that.`);
                playAgain = prompt(`Do you want to play again? Y/N`)            
            }}
        }else if((parseInt(guess) > 100) || parseInt(guess)< 1){
            alert(`Your number is not between 1-100, guess again, ${name}.`);
            guess = prompt(`Guess a number from 1-100`);
        }else if(correctAns > parseInt(guess)){
            alert(`Guess Higher, ${name}.`);
            guess = prompt(`Guess a number from 1-100`);
            attempts.push(guess);
        }else if(correctAns < parseInt(guess)){
            alert(`Guess Lower, ${name}.`);
            guess = prompt(`Guess a number from 1-100`);
            attempts.push(guess);
        }else{
            alert(`that is not a number, ${name}.`);
            guess = prompt(`Guess a number from 1-100`);
      }
    }
}

game();

