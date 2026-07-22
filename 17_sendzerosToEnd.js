//send zeros to end

let arr=[1,0,0,4,5,6,0,0,7,9,0,0,0]

let x= arr.filter(item => item!==0)
console.log(x);

let y= arr.filter(item => item==0)
console.log(y)

let z= [...x,...y];
console.log(z)
