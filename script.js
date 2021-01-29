let num = 266219;

let s = 1;

while(num){
    s *= num%10;
    num = Math.floor(num/10);
} 

console.log(s);

s = s ** 3;  

console.log(String(s).slice(0,2));