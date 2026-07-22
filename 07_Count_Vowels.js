//count vowels

let str="Poornima";
let vow="aeiouAEIOU";
let count="";

for(char of str){
    if(vow.includes(char)){
        count++
    }
   
}
 console.log(count);

//count vowels in each word
let sen= 'May name Poornima'
let [word1, word2, word3] = sen.split(" ");
let vow= 'aeiouAEIOU';
let countword1=0;
let countword2=0;
let countword3=0;

for (char of word1){
    if(vow.includes(char)){
        countword1++
    }
}
for (char of word2){
    if(vow.includes(char)){
        countword2++
    }
}

for (char of word3){
    if(vow.includes(char)){
        countword3++
    }
}

console.log("Vowels in word1 ="+" "+countword1);
console.log("Vowels in word2 ="+" "+countword2);
console.log("Vowels in word3 ="+" "+countword3);

