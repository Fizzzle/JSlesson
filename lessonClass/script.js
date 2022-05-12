'use strict';

class Rectangle {
    constructor(height, width) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgcolor) {
        super(height, width);
        this.text = text;
        this.bgcolor = bgcolor;
    }

    showMyProps() {
        console.log(`текст: ${this.text}, цвет: ${this.bgcolor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, "привет", 'red');

div.showMyProps();

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());