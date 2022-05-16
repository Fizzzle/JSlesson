const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('privet', 'Меня', "зовут", "Виктор", "Приятно", "познакомится");

function calcOrDouble(number = 1, basis = 1) {
    console.log(number * basis);
}

calcOrDouble(5, 5);