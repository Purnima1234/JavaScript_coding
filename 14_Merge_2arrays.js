//merge 2 arrays

let arr1=[2,4,6,7,8]
let arr2 =[4,5,7,9]

let x= arr1.concat(arr2);
console.log(x)

let y=[...arr1,...arr2]
console.log(y);

//ave of arr
let arr=[4,5,3,6,8,9]
let sum=arr.reduce((a,b)=> a+b);