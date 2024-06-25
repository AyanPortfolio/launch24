const guess = document.getElementById("guess");
const report = document.getElementById("report");

let MAXNUM = 1000000
let MINNUM = 0

let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.max = MAXNUM;
    guess.min = MINNUM;

   secret=Math.random()
   let range = MAXNUM - MINNUM + 1;
   secret = secret * range;
   secret = secret + MINNUM;
   secret = Math.floor(secret);
}

function makeGuess() {
    let myGuess = parseInt(guess.value);

if (MyGuess == secret) {
    report.innerHTML = '${myGuess} is correct!';
} else if (myGuess < secret) {
report.innerHTML = '${myGuess} is too small';
} else {
    report.innerHTML = '${myGuess} us too big';
}


}