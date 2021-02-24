'use strict';

const input = document.querySelector('input'),
    text = document.querySelector('p');
let bull = false,id;
function write(){
    text.textContent = input.value;
    bull = true;
}
input.addEventListener('input', ()=>{
    if(bull){
        clearTimeout(id);
        id = setTimeout(write, 3000);
    } else {
        id = setTimeout(write, 3000);
    }
}
);