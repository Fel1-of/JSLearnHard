'use strict';
//№1
let arr=prompt("Введите 7 многозначных чисел через ', ':").trim().split(', ');

for(let i=0;i<7;i++){
    if(arr[i][0]==='2' || arr[i][0]==='4'){
        console.log(arr[i]);
    }
}
//№2
console.log('Простые числа:')
for(let i=2;i<100;i++){
    let sum=0;
    let b=0;
    for(let j=1;j<=Math.sqrt(i);j++){
        if (i%j===0){
            sum+=1;
            b=j;            
        }
    }
    if(sum===1){
        console.log(i, `Делители этого числа: 1 и ${b}`);
    }
    
}