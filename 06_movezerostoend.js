//send zeros to end
let number="98006700546700";
let number1=number.split("");

let x= number1.filter(item=> item==='0');
console.log(x);

let y=number1.filter(item=> item!=='0');
console.log(y);

let z= [...y,...x].join("");
console.log(z)
