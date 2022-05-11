'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// 1) обычная функция : This = window.  А если включить строгий режим('use strict') то будет undefined;
// 2) Функция внутри функции с this . вызовет тоже самое что и прошлая window и undefined;

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }

// obj.sum();
 
// контекст this у методов в обьектах, будет сам обьект.


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.humant = true;
// }
// let Ivan = new User('Ivan', 23);
// 3) this в конструкторах и классах - это новый экземпляй обьекта

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name : "John"
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(6));

// ручная привязка this. call, apply, bind

// 1) Если просто вызывать this он будет ссылаться на window или undefined в зависимости от сторого режиме.
// 2) Если вызывать его в обьекте в функции, он будет отсылаться к обьекту.
// 3) Если в классах и в функциях конструкторах - будет новый экземпляр обьекта
// 4) ручная привязка THIS с помощью call;apply;bind;


const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
})
// Работает как и This = e.target = но у стрелочной функции. 
// т.к. в стрелочных функциях нет е.таргета.   

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    }
}

obj.sayNumber(); 

const double = (a) => a * 2;

console.log(double(4));