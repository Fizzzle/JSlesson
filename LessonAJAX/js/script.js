'use strict';

const inputUah = document.querySelector('#uah'),
    inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();    
    // request.open(method, url, async, login, password);

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=uft-8');
    request.send();

    request.addEventListener('load', () => {
        // каждый раз будет срабатывать когда будет сменяться запрос
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value * data.current.usd).toFixed(0);
        } else {
            inputUsd.value = "Что то пошло не так";
        }
    })

    // status можно в гугле глянуть коды 1хх - продолжай, 2хх - успешно, 3хх перенаправление, 4хх - ошибка клиента
    // statusText текст в ошибке
    // response = ответ от сервера. от бекенд разработчика
    // readyState = значение/состояние/описание (например 4 Отлично) ВАЖНО if (request.readyState === 4 && request.status === 200)
    // load = срабатывает только когда запрос завершен тут if (request.status === 200) readyState не будет проверяться
});