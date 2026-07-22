//find Max number in array

let arr=[5,7,9,12,16,90]
let maxnum=Math.max(...arr);
console.log(maxnum)

//another way by sort
let max=arr.sort((a,b) => b-a)[0];
console.log(max);

//Find smallest number
let smnumber=Math.min(...arr);
console.log(smnumber);

//sort method
let small=arr.sort((a,b) => a-b)[0];
console.log(small)

//Second largest
let seclar= arr.sort((a,b) => b-a)[1]
console.log(seclar);