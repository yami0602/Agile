// Challenge 4
// The function reduce takes an array and reduces the elements to a single value.For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
var add = function (a, b) {
    return a + b;
}

// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value.The next loop executes with this new accumulator value.In the example above, the accumulator begins at 0. add(0, 4) is called.The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned. 

var nums = [4, 1, 3];

function reduce(array, callback, initialValue = 0) {
    var accumulator = initialValue;
    const len = array.length;
    for (let i = 0; i < len; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return;
}
const add = (a, b) => a + b;



console.log(reduce([4, 1, 3], add));
console.log(reduce(nums, add, 0)); //8


// Challenge 5
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.BONUS: Use reduce!


// Challenge 5
const reducer = (a, b) => {
    const len = b.length;

    for (let i = 0; i < len; i++) {
        if (a[b[i]]) {
            a[b[i]] += 1;
        } else {
            a[b[i]] = 1;
        }
    }

    return a;
};

function intersection(arrayOfArrays) {
    var result = [];
    var dict = {};

    // build our dictionary
    dict = reduce(arrayOfArrays, reducer, dict);

    // build our results array
    for (let key in dict) {
        if (dict.hasOwnProperty(key)) {
            if (dict[key] == arrayOfArrays.length) {
                result.push(+key);
            }
        }
    }

    return result.length > 0 ? result : null;
}

console.log(intersection([
    [1, 2, 3],
    [2, 1, 4],
    [2, 3, 5]
])); // [2]
console.log(intersection([
    [1, 5, 10, 20, 15],
    [88, 1, 7, 5],
    [1, 10, 15, 5, 20]
])); // [1, 5]


const reducer = (a, b) => {
    return a.filter(elem => {
        return b.includes(elem);
    });
}

function intersection(arrayOfArrays) {
    return reducer(arrayOfArrays, reducera, arrayOfArrays[0]);
}

console.log(intersection([1, 2, 3], [2, 1, 4], [2, 3, 5]));

// Challenge 6
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements.If there are duplicate elements, only add it once to the new array.Preserve the order of the elements starting from the first element of the first input array.
// BONUS: Use reduce!


const reducer = (a, b) => {
    return a.filter(elem => {
        return b.includes(elem);
    });
}

function intersection(arrayOfArrays) {
    return reduce(arrayOfArrays, reducera, arrayOfArrays[0]);
}




//accumaltor [] ,array[i]

const reducer2 = (a, b) => {

    return a.concat(
        b.filter(elem => {
            return a.indexOf(elem) === -1;
        })
    );
};


function union(arrayOfArrays) {
    var result = [];

    result = reduce(arrayOfArrays, reducer2, result);

    return result;
}




console.log(union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5]
]));



// Challenge 7
// Construct a function objOfMatches that accepts two arrays and a callback.objOfMatches will build an object and return it.To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array.If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.


function objOfMatches(array1, array2, callback) {
    var result = {};

    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        if (callback(array1[i]) === array2[i]) {
            result[array1[i]] = array2[i];
        }
    }
    return result;
}
console.log(
    objOfMatches(
        ['hi', 'hello', 'bye'], ['hi', 'hello', 'hater'],
        function (str) {
            return str.toUpperCase();
        }
    )
)

// {'hi': 'HI', 'bye': "BYE"}
//     Challenge 8
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.multiMap will return an object whose keys match the elements in the array of values.The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arrVals, arrCallbacks) {
    var result = {};
    var arraCalls = [];
    const len = arrVals.length;

    for (let i = 0; i < len; i++) {
        result[arrVals[i]] = arrCallbacks.map(func => {
            return func(arrVals[i]);
        })
    }
    return result;
}


console.log(multiMap(
    ['catfood', 'glue', 'beer'], [
        function (str) {
            return str.toUpperCase();
        },
        function (str) {
            return str[0], toUpperCase() + str.slice(1).toLowerCase();
        },
        function (str) {
            return str + str;
        }
    ]
));