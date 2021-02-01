let lang = String(prompt("Выберите и введите язык(en/ru)"));



//A
if( lang === "ru"){
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.");
} else{ 
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.");
}

//B
switch(lang){
    case "ru":
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.");
        break;
}   

//C 
let ar = [];
ar['ru'] = ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."];
ar['en'] = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."];

console.log(ar[lang]);