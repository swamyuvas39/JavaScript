/* filter() method filters the given array based on the callback function conditions or
criteria which is passed to the filter method and it retirns a new array. */

const arr = [1,2,3,4,5,6,7,8];

const even = arr.filter((num)=>num%2==0);
console.log(even);
