'use strict';

function formatDate(time, titles) {

    const cases = [2, 0, 1, 1, 1, 2];

    return titles[(time % 100 > 4 && time % 100 < 20) ? 2 : cases[(time % 10 < 5) ? time % 10 : 5]];
}

let weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let yearMonth = ['Января', 'Февраля', "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа",
    "Сентября", "Октября", "Ноября", "Декабря"
];

const firstTime = document.querySelector('.first_time');
const secondTime = document.querySelector('.second_time');

function releaseDate() {
    let myDate = new Date();

    const year = myDate.getFullYear();
    const month = yearMonth[myDate.getMonth()];
    const weekDay = weekDays[myDate.getDay()];
    const day = myDate.getDate();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();

    let hoursSpell = ['час', 'часа', 'часов'];
    let minutesSpell = ['минута', 'минуты', 'минут'];
    let secondsSpell = ['секунда', 'секунды', 'секунд'];

    let hoursSpelling = formatDate(hours, hoursSpell);
    let minutesSpelling = formatDate(minutes, minutesSpell);
    let secondsSpelling = formatDate(seconds, secondsSpell);

    let parseTime = myDate.toLocaleString().split(', ');
    let date = parseTime[0].split('/').join('.');
    let time = parseTime[1];
    let fullDate = (date + ' - ' + time);

    document.getElementById('time1').textContent = `Сегодня ${weekDay}, ${day} ${month} ${year} года, ${hours} ${hoursSpelling} ${minutes} ${minutesSpelling} ${seconds} ${secondsSpelling}`;
    document.getElementById('time2').textContent = fullDate;
};

setInterval(releaseDate, 1000);