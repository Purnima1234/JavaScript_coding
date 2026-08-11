let x="India My Country";
let vow="aeiouAEIOU";
//let count=0;
let words=x.split(" ");
for(let i=0;i<words.length;i++){
    let count=0;
    for(let j=0;j<words[i].length;j++){
        if(vow.indexOf(words[i][j])!==-1){
            count++;
        }
    }
    console.log(words[i]+": "+count);
}



//find common integers in two arrays       
            
let x=[1,2,3,4,5,6]

let y=[4,5,6]

let z=""

for(let i=0; i<x.length; i++){
    if(y.includes(x[i])){
        z+=x[i]+" ";
    }
}

console.log(z)