let userGuess = +prompt('guess a number');
let winningNumber = 19;
console.log(typeof userGuess);


//nested if else

if(userGuess === winningNumber){
    console.log('Guess number is winning number ');
    

}

else{
    if(userGuess>=winningNumber){
        console.log('too high');

    }

    else{
        console.log('too low')
    }
}