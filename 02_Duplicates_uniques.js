//find Duplicates

let str="Poornimma";
let str2=str.split("");
let dup=str2.filter((item,index)=>str2.indexOf(item)!==index);
console.log(dup);

//remove duplicates or
let x= [...new Set(str2)].join("");
console.log(x);

//Find unique
let uniq=str2.filter(item=> !dup.includes(item));
console.log(uniq);