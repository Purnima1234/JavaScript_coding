//sum of array

let arr=[4,5,3,6,8,9]
let sumarr=arr.reduce((a,b)=> a+b);
console.log(sumarr);

//average
let countd= arr.length;
console.log(countd);

let x=sumarr/countd;
console.log(x)

//Count of Even numbers
let arr12=[2,3,4,5,6,7,8];
let even= arr12.filter((item)=>item%2==0);
console.log(even)
let lenEven=even.length;
console.log(lenEven);