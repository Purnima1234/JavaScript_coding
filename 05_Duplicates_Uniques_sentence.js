//find duplicates and uniques in each word print first letter
let sen="hiopi hkrkjj hheellokp";
let [word1, word2, word3]= sen.split(" ");

let word1_split=word1.split("")
let dupword1=word1_split.filter((item,index) => word1_split.indexOf(item)!==index)
let  uniqword=word1_split.filter(item=> !dupword1.includes(item));
console.log(uniqword);
let x=uniqword[0];
console.log(x);

let word2_split=word2.split("")
let dupword2=word2_split.filter((item,index) => word2_split.indexOf(item)!==index)
let  uniqword2=word2_split.filter(item=> !dupword2.includes(item));
console.log(uniqword2);

let word3_split=word3.split("")
let dupword3=word3_split.filter((item,index) => word3_split.indexOf(item)!==index)
let  uniqword3=word3_split.filter(item=> !dupword3.includes(item));
console.log(uniqword3);
let z=uniqword3[0];



//remove only duplicates in aray
// reomove duplicates from array

let arr=[1,0,7,0,6,7,7,8,5,0];
let rd=arr.filter((item,index)=>arr.indexOf(item)===index);
console.log(rd)
