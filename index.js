const arr1 = [1, 2, 3];
console.log(arr1);

function mapForEach(arr, fn) {

    const newArr = [];

    for(i=0; i<arr.length; i++) {

        newArr.push(fn(arr[i]));
    }

    return newArr;
} 

// ----------------------------------------------------------------------------

const arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})
console.log(arr2);

// ----------------------------------------------------------------------------

const arr3 = mapForEach(arr1, function(item) {
    return item > 2;
})
console.log(arr3)

// ----------------------------------------------------------------------------

const checkPastLimit = function(limiter, item) {
    return item > limiter;
}

const arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1))
console.log(arr4)

// ----------------------------------------------------------------------------

const simplifiedCheckPastLimit = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter)
};

const arr5 = mapForEach(arr1, simplifiedCheckPastLimit(1));
console.log(arr5);

// ----------------------------------------------------------------------------
