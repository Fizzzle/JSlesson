"use strict";

function User(name, id, age) {
    this.name = name,
    this.id = id,
    this.age = age,
    this.human = true;
}

const Viktor = new User('Viktor', 1, 22);
const Alex = new User('Alex', 2, 26);

console.log(Viktor);
console.log(Alex);