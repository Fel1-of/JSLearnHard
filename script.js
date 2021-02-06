'use strict';
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ];
let date = new Date();

for (let i in week) {
    if (week[i] === "Воскресенье" && +(i+1)%7 === +date.getDay() || week[i] === "Суббота" && +(i+1)%7 === +date.getDay()) {
        document.write(date.getDay());
        document.write(week[i].italics().bold() + "<br \/>");
    } else if (week[i] === "Воскресенье" || week[i] === "Суббота") {
        document.write(week[i].italics() + "<br \/>");
    } else if (+(i+1)%7 === +date.getDay()) {
        document.write(week[i].bold() + "<br \/>");
        
    } else {
        document.write(week[i] + "<br \/>");
    }
}
