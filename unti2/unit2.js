function add2(num) {
    return num + 2
}

function callingNumber(num, callback) {
    return callback(num)
}

console.log(callingNumber(2, add2));

//why is add2 a callback function??
//1) it is used as an inut in another function call
//2) It is called inside of the other function


//why is callingNumber the higer prder function??
//1) It takes a funtion as an argument
//2) It calls its input function when it is called.
//hence the term "callback" as one functioncall leads to another


// What is this good for? When do we use this ?
// 
//


// ??why is this useful? What problem(s) does it help us to solve?



//help us to solve a general sort of code dupication problem






const array = [1, 2, 3];
const output = [];

for (let i = 0; i < array.length; i++) {
    const updated = array[i] + 10;
    output.push(updated);
}

console.log(output)




function update(callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        const updated = array[i] + 10;
        output.push(updated);
    }
    return output
}


//DRY dont repeat yourself..
//use callback functions to make your code dry

//callback functions

function add10(num) {
    return num + 10
}


function multiplyby20(num) {
    return num * 20
}

function strigfy(num) {
    return num.toString();
}

console.log(update(add10));
console.log(update(multiplyby20));
console.log(update(strigfy));