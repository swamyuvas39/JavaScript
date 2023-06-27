/* Map() function is commonly used when you want to transform each Element
of an array into a new value and collect the transformed values into a new array. */

const arr = [1,2,3,4];

const square = arr.map((num)=>num*num);
console.log(square);   //[1,4,9,16]

function binary(x){
    return x.toString(2);
}

const output = arr.map(binary);

console.log(output); //['1', '10', '11', '100']

