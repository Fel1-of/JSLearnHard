'use strict';
function isNumber(num){
    return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
}

function game(){
    let attempt = 9;
    let rand = Math.floor(Math.random() * 100) + 1;
    let ans = prompt("Угадай число от 1 до 100");
    function answer(){
        if(!isNumber(ans) && ans!==null ){
            ans=prompt("Введи число!");
        }
        if(!isNumber(ans) && ans!==null){
            answer();
        }
        return Number(ans);
    }
    answer();
    function MoreLess(){
        if(ans===null){
            alert("Игра окончена");
        } else if(attempt===0){
            confirm('Попытки закончились, хотите сыграть еще?') ? game() : alert("Игра окончена");
        }
        else if(ans>rand){
            ans=prompt(`Загаданное число меньше. Осталось попыток ${attempt}. Введите новое число:`);
            attempt--;
            answer();
            MoreLess();
        }
        else if(ans<rand){
            ans=prompt(`Загаданное число больше. Осталось попыток ${attempt}. Введите новое число:`);
            attempt--;
            answer();
            MoreLess();
        } 
        else{
            confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') ? game() : alert("Игра окончена");
        }
    }
    MoreLess();
}

game();