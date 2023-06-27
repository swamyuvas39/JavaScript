console.log('person1: shows ticket');
console.log('person2: shows ticket');

/* const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
}); */

/* promiseWifeBringingTicks.then((t)=>{
    console.log(`person3: shows ${t}`);
}); */
/* const getPopcorn = promiseWifeBringingTicks.then((t)=>{
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

getColdDrinks.then((t)=>{console.log(t)}); */

// This is one way of declaring async function

/* const preMovie = async ()=>{  // palce async syntax infront of any function, so it coverts that function into async function. 
                               //Unlike regular functions async function always return a promise
    console.log("pre Movie");
} */

//expression of async function

//const preMovie = async()=>'pre movie';

// place a promise inside the async function 

const preMovie = async()=>{
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000);
    });
    const getPopcorn = new Promise((resolve,reject)=>resolve('Popcorn'));
    const getButter = new Promise((resolve,reject)=>resolve('Butter'));
    const getColdDrinks = new Promise((resolve,reject)=>resolve('Cold drinks'));

    let ticket = await promiseWifeBringingTicks; // await can be used only inside a async function only.

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife: No! I am hungry');
    
    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife: I need butter on my Popcorn');

    let butter = await getButter;

    console.log(`husband: I got ${butter}`);
    console.log('husband: We should go in');
    console.log('wife: I want cold drinks');

    let colddrinks = await getColdDrinks;
    
    console.log(`husband: I got cold ${colddrinks}`);
    console.log('husband: We should go in');
    console.log('wife: Okay lets go');

    return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');




