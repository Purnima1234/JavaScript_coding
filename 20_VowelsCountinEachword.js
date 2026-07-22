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
