let arr = ["Swamy","Yuvas"];
let object = {
    name: "swamy",
    city: "Vizag",
    getIntro: function(){
        console.log(this.name+" from "+this.city);
    }
}

object2 = {
    name: "Suresh"
}

object2.__proto__=object;// object2 proto assign to the object. this is called prototype inheritance    
console.log(object2.name);//suresh
console.log(object2.city); // Vizag
console.log(object2.getIntro()); // suresh from vizag

/* 
Prototype Chain: Each object in JavaScript has a prototype, except for the root object, 
which is null. When you access a property or method on an object, JavaScript first looks 
for it on the object itself. If it doesn't find it, it searches in the prototype of the object. 
If the property or method is still not found, it continues up the prototype chain until it reaches the root object.  */

/* - What is Prototype?
- What is Prototypal Inheritance?
- What is Prototype Chain?
- Why we call it _proto_ ?
- What is inhertance in Javascript? */

Function.prototype.mybind = function(){  // mybind function is now prototyped.So, everyone can access this function now.
    console.log("Everyone can access this function now.");
}

function fun(){

}

function fun1(){

}

console.log(fun.mybind());//Everyone can access this function now.

console.log(fun1.mybind());//Everyone can access this function now.
