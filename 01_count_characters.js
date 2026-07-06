//count characters

let str="poornima";
let str1= str.split("");
let str2={};

for(char of str1){
    if(str2[char]){
        (str2[char])++;
    }
    else{
        (str2[char])=1
    }
}

console.log(str2);