// Scope of var , let and const
/* var declarations are function-scoped or globally-scoped. 
They are hoisted to the top of their scope, meaning you can 
access them before they are declared within the same scope.

let and const declarations are block-scoped, which means they 
are limited to the block (with curly braces) where they are defined.
They are not hoisted, so you cant access them before they are declared.
*/

/* console.log(a);  //undefined
console.log(b); // Reference error: cannot access 'b' before initialization
console.log(c); // Reference error: cannot access 'c' before initialization


var a = 10;
let b = 10;
const c = 10; */

/* Hoisting of var , let and const
var declarations are hoisted at the top of the their scope. This means you can 
access the variables before it is declared, although its value will be undefined.

let and const declarations are not hoisted. if you try to access them before they are 
declared, you will get a reference error.
*/

/* Reassignment of var, let and const

var and let variables can be reassigned with a new value or reference.

const variables are constant cannot be reassigned after they are declared.
However, its important to note that if a const variables holds an object or an array, 
the properties or elements of the object/ array can be modified.
*/

var a =10;

console.log(a);  //10

a = 20;

console.log(a);   // 20

//let  a =30; // a already declared

//const a = 30; // a already declared

let b = 20;

console.log(b); //20

//const b = 30; // b alreday declared

//var b = 30; // b already declared

b = 40;

console.log(b); //40;


const c = 30;

console.log(c); //30
