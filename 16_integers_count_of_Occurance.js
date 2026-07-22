//ferquency of each element

let arr=[1,2,1,2,3,2,4,7,7,7,7];
 let intcount={};
 
 for(int of arr){
     if(intcount[int]){
         (intcount[int])++;
     }
         else{
             (intcount[int])=1
         }
         
     }
 
console.log(intcount);