function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

var correctAns = getRandomIntInclusive(1, 100);
var correct = false;
var guess = prompt("Guess a number from 1-100")
var attempts = [];


while(correct === false){
    if(correctAns === parseInt(guess)){
        alert(`Correct! The answer was ${correctAns}. You got it right in ${attempts.length}. These are your guesses: ${attempts}.`);
        correct = true;
    }else if((parseInt(guess) > 100) || parseInt(guess)< 1){
        alert('Your number is not between 1-100, guess again');
        guess = prompt("Guess a number from 1-100");
    }else if(correctAns > parseInt(guess)){
        alert('Guess Higher');
        guess = prompt("Guess a number from 1-100");
        attempts.push(guess);
    }else if(correctAns < parseInt(guess)){
        alert('Guess Lower');
        guess = prompt("Guess a number from 1-100");
        attempts.push(guess);
    }else{
        alert('that is not a number');
        guess = prompt("Guess a number from 1-100");
}

}