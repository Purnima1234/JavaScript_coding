let sen="I love India"

//out put= India Love I

let sen1= sen.split(" ");
let revwords= " ";
let revwords2="";

for(let i=sen1.length-1; i>=0; i--){
    revwords+=sen1[i]+" ";
}
console.log(revwords);

//output - I evol aidnI
 for(let j=revwords.length-1; j>=0; j--){
     revwords2+=revwords[j];
     
 }
 
 console.log(revwords2);
