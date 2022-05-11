/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из фильмов который последний вы посмотрели', '123'),
            b = prompt('И как вы его оцените?', '123');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }    
    }
}


rememberMyFilms();

function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        console.log('Слабо ты как то:(');
    } else if (personalMovieDB.count > 10 && numberOfFilms < 20) {
        console.log('Нормуль зарядил');
    } else {
        console.log("НИХЕРА СЕБЕ СКОЛЬКО ФИЛЬМОВ ТЫ ГЛЯНУЛ");
    }
};

detectPersonalLvl()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номер ${i}`);
    }
}
writeYourGenres();