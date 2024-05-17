'use strict';

const secretnumber = Math.trunc(Math.random() *20) + 1;

let score=20;
document.querySelector('.number').textContent=secretnumber;

document.querySelector('.check').addEventListener
('ckick', function(){
const guess= Number(document.querySelector('.guess').value);
console.log(guess, typeof guess)

if (!guess) {
    document.querySelector('.message').textContent=
    ' No Number!';
} else if (guess === secretnumber){
    document.querySelector('.message').textContent=
    'Correct Number!'
} else if (guess>secretnumber){
    if (score>1){
    document.querySelector('.message').textContent=
    'Guess is too high!'
    score--;
    document.querySelector('.score').textContent= score}
    else {document.querySelector('.message').textContent='You Lost the game!';
        document.querySelector('.score').textContent=
        0;
    }
} else if (guess<secretnumber){
    if (score<0){
    document.querySelector('.message').textContent=
    'Guess is too low!'
    score--;
    document.querySelector('.score').textContent= score}
    else {document.querySelector('.message').textContent='You Lost the game!';
        document.querySelector('.score').textContent=
        0;
    }
}

})
