'use strict';
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let date = new Date();

for (let i of week) {
    if (i === "Воскресенье" || i === "Суббота") {
        document.write(i.italics() + "<br \/>");
    } else if (+i === +date.getDay()) {
        document.write(i.bold() + "<br \/>");
    } else{
        document.write(i + "<br \/>");
    }
}