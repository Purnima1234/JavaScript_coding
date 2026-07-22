//check anagram

let str1="odg"

let str2= "dog";

let str1x= str1.split("")
console.log(str1x)

let str12x=str1x.sort().join("");
console.log(str12x);

x=str2.split("");
x2=x.sort().join("");
console.log(x2);

if (str12x===x2){
    console.log("Its anagram");
} else{
    console.log(("not a anagram"))
}
