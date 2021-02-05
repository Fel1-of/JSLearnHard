'use strict';
let week = [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let date = new Date();

for (let i in week) {
    if (week[i] === "Воскресенье" || week[i] === "Суббота") {
        document.write(week[i].italics() + "<br \/>");
    } else if (+i === +date.getDay()) {
        document.write(week[i].bold() + "<br \/>");
    } else{
        document.write(week[i] + "<br \/>");
    }
}