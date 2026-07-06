let str="Poornimma";
let str2= str.split("");
let dup=str2.filter((item,index)=>str2.indexOf(item)!==index);
console.log(dup);

let uniq= str2.filter(item=> !dup.includes(item));
console.log(uniq);
let r=uniq[0];
console.log(r);

let sen= "India is my Country";
let [word1, word2, word3, word4]= sen.split(" ");
console.log(word1);

let word1length= word1.length;
console.log(word1length);
let word2length= word2.length;
console.log(word2length);
let word3length= word3.length;
console.log(word3length);
let word4length= word4.length;
console.log(word4length);
