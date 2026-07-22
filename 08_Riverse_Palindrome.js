//palindrome

let str="PAAP";

let revstr="";



for(let i= str.length-1; i>=0; i--){
    revstr+=str[i]
}
console.log(revstr);

if(str===revstr){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

// reverese statement
let sen="India is my country"

let [word1,word2, word3, word4]= sen.split(" ");


revword1="";
revword2="";
revword3="";
revword4="";

for (let i=word1.length-1; i>=0; i--){
    revword1+=word1[i];
}

for (let i=word2.length-1; i>=0; i--){
    revword2+=word2[i];
}

for (let i=word3.length-1; i>=0; i--){
    revword3+=word3[i];
}

for (let i=word4.length-1; i>=0; i--){
    revword4+=word4[i];
}

console.log(revword1);
console.log(revword2);
console.log(revword3);
console.log(revword4);

let sen2=revword1+" "+revword2+" "+revword3+" "+revword4
console.log(sen2)


