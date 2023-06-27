/* function X(){
    console.log("Hello World!");
}

function Y(X){
    X();
} */
//Here X() is callback functon and Y() is a higher order Function.

const radius = [2,3,4,5];

const area = function(radius){
    return Math.PI*radius*radius;
} 

const circumference = function(radius){
    return 2* Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius;
}

/* const calculate = function(radius,logic){
    const output =[];
    for (let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
 */
//instead of using calculate function we can use map (a higher order function)

console.log(radius.map(area)); 
// Here map iterate over each element of the radius and returns the output


// we can write calculate function as same as map by using Array.prototype.calculate 
//Here the radius points to this.
Array.prototype.calculate = function(logic){
    const output =[];
    for (let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

/* console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter)); */
