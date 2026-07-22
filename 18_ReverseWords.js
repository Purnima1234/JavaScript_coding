let sen="I love India";

let rev=sen.split(" ");

let revstring="";
let wordrev="";

for(let i=rev.length-1; i>=0; i--){
    revstring+=rev[i]+" ";
}

for(let j=revstring.length-1; j>=0;j--){
    wordrev+=revstring[j];
}

  console.log(wordrev)

// words reverse
  let sen="I love my country india";

let words= sen.split(" ");
let rev="";

for(let i= words.length-1; i>=0; i--){
    rev+=words[i]+" ";
    
}

console.log(rev);