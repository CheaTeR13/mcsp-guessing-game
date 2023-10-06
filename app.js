function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

var correctAns = getRandomIntInclusive(1, 100);
var correct = false;
var guess = prompt("Guess a number from 1-100")


while(correct === false){
    if(correctAns === parseInt(guess)){
        alert('Correct!');
        correct = true;
    }else if((parseInt(guess) > 100) || parseInt(guess)< 1){
        alert('Your number is not between 1-100, guess again');
        guess = prompt("Guess a number from 1-100");
    }else if(correctAns > parseInt(guess)){
        alert('Guess Higher');
        guess = prompt("Guess a number from 1-100");
    }else if(correctAns < parseInt(guess)){
        alert('Guess Lower');
        guess = prompt("Guess a number from 1-100");
    }else{
        alert('that is not a number');
        guess = prompt("Guess a number from 1-100");
}

}