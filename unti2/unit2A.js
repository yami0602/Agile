// Challenges Set A

// Challenge 1
// Create a function called subtractTwo that will accept a number, and return the number minus 2.



function subtractTwo(num) {
    return num - 2
}

console.log(subtractTwo(10))


// Then create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.please do not use the native map or forEach method.

// const array = [1, 2, 3];


function map(array, callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        const updated = callback(array[i]);
        output.push(updated);
    }
    return output
}

function multiplyByTwo(num) {
    return num * 2

}

function add2(num) {
    return num + 2
}

map([1, 2, 3, 4, 5], multiplyByTwo); //-> [2,4,6,8,10]
map([2, 3, 4, 5, 6], add2)
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //

console.log(multiplyByTwo(1))
console.log(multiplyByTwo(2));
console.log(map([1, 2, 3, 4, 5], multiplyByTwo));

// Challenge 2 

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array.forEach does not return anything.Please do not use the native forEach or map method.

function forEach(array, callback) {
    // const len = array.length;
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});
console.log(alphabet); //prints 'abcd'


// Challenge 3
// In the first part of the extension, you 're going to rebuild map as mapWith. This time you'
// re going to use forEach inside of mapWith instead of using a
// for loop.
function subtractTwo(num) {
    return num - 2
}

function forEach(array, callback) {
    // const len = array.length;
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function mapWith(array, callback) {
    var result = [];

    forEach(array, function (num) {
        result.push(callback(num))
    });
    return result;
}



console.log(mapWith([1, 2, 3], subtractTwo));