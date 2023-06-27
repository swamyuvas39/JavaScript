console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});

/* promiseWifeBringingTicks.then((t)=>{
    console.log(`person3: shows ${t}`);
}); */
const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('husband: We should go in');
    console.log('wife: No! I am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`Got the ${t}, Popcorn`);
    });
});
const getButter = getPopcorn.then((t)=>{
    console.log('husband: We should go in');
    console.log('wife: I need butter on my Popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t}, butter`);
    });
});

const getColdDrinks = getButter.then((t)=>{
    console.log('husband: We should go in now');
    console.log('wife:I want cold drinks');
    return new Promise((resolve,reject)=>{
        resolve(`${t} and cold drinks`);
    });
});

getColdDrinks.then((t)=>{console.log(t)});
console.log('person4: shows ticket');
console.log('person5: shows ticket');




