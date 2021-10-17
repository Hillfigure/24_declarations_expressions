let number1 = 4;
let number2 = 2;

function squareNumber1 (x, y) {
    let squareX = x*x;
    let squareY = y*y;
    let add = squareX + squareY;
    return add * add;
}

console.log(squareNumber1(number1, number2));

const squareNumber2 = function(x, y) {
    let squareX = x**2;
    let squareY = y**2;
    let add = squareX + squareY;
    return add ** 2;
}

console.log(squareNumber2(number1, number2));

const squareNumber3 = (x, y) => {
    let squareX = Math.pow(x, 2);
    let squareY = Math.pow(y, 2);
    let add = squareX + squareY;
    return Math.pow(add, 2);
}

console.log(squareNumber3(number1, number2));