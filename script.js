'use strict';

let str = prompt("Введите строку:");
function IsString(str){
    if(typeof(str)!=="string"){
        return `${str} не является строкой`;
    }

    str = str.trim();

    if(str.length>30){
        return str.slice(0,30)+'...';
    } else {
        return str;
    }

}

console.log(IsString(str));