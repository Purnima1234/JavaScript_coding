//find duplicates in each word

let sen="Poornima is myy naame"
//find duplicates in each word
let sen2= sen.split(" ");


for(let i=0; i<sen2.length; i++){
    let word = sen2[i];
    let dup = word.split('').filter((item,index)=> word.indexOf(item)!==index);
    console.log(word+" "+dup);
}