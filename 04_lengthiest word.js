let sen= 'India isdia minetgh country';
let [word1, word2, word3, word4]= sen.split(" ");

let word1length=word1.length;
let word2length=word2.length;
let word3length=word3.length;
let word4length=word4.length;

let wordslength=[word1length,word2length,word3length,word4length];
console.log(wordslength);
 let maxnum=Math.max(...wordslength);
 console.log(maxnum);
 let words=[word1, word2, word3, word4];
 
 let larword=words.filter(item => item.length===maxnum);
 console.log(larword);
 
 //second larggest
 let a=[...new Set(wordslength)];
 console.log(a);
 
 let seclar=a.sort((a,b) => b-a)[1];
 console.log(seclar)
 
 let seclargest=words.filter(item => item.length===seclar);
 console.log(seclargest);