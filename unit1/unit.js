These challenges may seem accessible, but make sure you diagram them out or talk through them aloud in the same way we did in class.Understanding this precise approach to communicating your code will ensure that all the hard challenges to come follow much more naturally

// Challenge 1A

Create a

function addTwo that accepts a number, and returns the number plus 2.


function addTwo(inputNumber) {
    return inputNumber + 2;
}
const value = addTwo(4);
console.log(value);

Challenge 1

Create a

function addS that accepts a string, and returns the string with an "s"
added to the end.

function addS(string) {
    return string + 's'
    // return `$(str)s`;
}

var newStr = addS('yami');
console.log(newStr)

Challenge 2

Examine the code given to you.Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true
for both, and pass in the arguments accordingly.

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

isX1(5);
isX2(3)

Challenge 3

Examine the code given to you.Try to make the calls variable equal to 'JerryKramerGeorgeElaine'
with only a single invocation to the

function jerry, as done in the commented out lines below the code given to you.You may add code to the places marked ADD CODE HERE ? , though it might not be necessary to add code to all four places.

let calls = "";

function jerry(str) {
    calls += 'Jerry';
    kramer();
    george();
    elaine();
    // ADD CODE HERE?


}
it

function george(str) {
    ot
    calls += 'George';
    // ADD CODE HERE?

}

function elaine(str) {
    calls += 'Elaine';
    // ADD CODE HERE?
}

function kramer(str) {
    calls += 'Kramer';
    // ADD CODE HERE?
}
jerry();
console.log(calls);
//console.log(calls); // should log out JerryKramerGeorgeElaine