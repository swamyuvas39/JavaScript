/* reduce() method is used to apply a function to an accumulator and each element of an array, 
resulting in a single value.

It iterates over the elements of the array and accumulates a value based on the logic defined in the callback function.

Some examples are finding Sum, max number, min number.
*/

const arr = [1,2,3,4,5];

//General way to write sum of the elements

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  
console.log(findSum(arr)); //15 

// finding sum using reduce()

const output = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc;
});
console.log(output); // 15

// If we want to pass any Initial value

const output1 = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc;
}, 2);

console.log(output1);    //17

//let us find max value  in general manner

function maxValue(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let max = arr[0]; // Initialize max with the first element
    for (let i = 1; i < arr.length; i++) { // Start loop from index 1
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
console.log(maxValue(arr));  //5 

// find maxValue using reduce() method

const maxValue1 = arr.reduce(function(acc,curr){
    if (curr>acc){
        acc = curr;
    }
    return acc;
});

console.log(maxValue1);  //5