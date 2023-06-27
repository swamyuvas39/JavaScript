
//array of objects

const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "venkat", lastName: "swamy", age: 23},
    {firstName: "murali", lastName: "savara", age: 23},
    {firstName: "suresh", lastName: "savara", age: 22}
]

//list of full names

//["akshay saini", "venkat swamy", "murali savara", "suresh savara"]

const outpout = users.map((x)=>x.firstName+" "+x.lastName);
console.log(outpout);//['akshay saini', 'venkat swamy', 'murali savara', 'suresh savara']

// try to find how may people have the same age
//{26:1, 23:2, 22:1}
// we use reduce() method

const output1 = users.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }

    return acc;
},{});

console.log(output1); //{22: 1, 23: 2, 26: 1}

// get first name of all the people whose age is lessthan 25

const output2 = users.filter((x)=>x.age<25)//it filtered all the objects which age less than 25
.map((x)=>x.firstName); 

console.log(output2);//['venkat', 'murali', 'suresh']

//by using reduce function

const output3 = users.filter((x)=>x.age<25)
.reduce(function(acc,curr){
    acc.push(curr.firstName);
    return acc;
},[]);

console.log(output3); //['venkat', 'murali', 'suresh']
