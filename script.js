'use strict';

let str = 0;
function IsString(str){
    if(typeof(str)!=="string"){
        return `${str} не является строкой`;
    }

    if(str.length>30){
        return str.slice(0,30)+'...';
    } else {
        return str;
    }

}

console.log(IsString(str));