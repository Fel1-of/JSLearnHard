let lang = String(prompt("Выберите и введите язык(en/ru)"));

//C 
let ar = [];
ar['ru'] = ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."];
ar['en'] = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."];

console.log(ar[lang]);

//A
if( lang === "ru"){
    console.log(ar['ru']);
} else{ 
    console.log(ar['en']);
}

//B
switch(lang){
    case "ru":
        console.log(ar['ru']);
        break;
    case "en":
        console.log(ar['en']);
        break;
}   

//№2

let namePerson = prompt("Введите имя");

namePerson === "Артём" ? console.log("Директор") : 
namePerson === "Максим" ? console.log("преподаватель") : console.log("студент");
