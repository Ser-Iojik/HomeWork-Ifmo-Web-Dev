(function () {
    'use strict';


// Задание 1
console.log('--------------------Задание1--------------------');

function arrays_equal(a,b) { 
    return console.log(!(a<b || b<a)); 
}
arrays_equal([1,2,3,4,4], [1,2,3,4]);

// Задание 2
console.log('--------------------Задание2--------------------');

function printNum(num) {
    if (num == 0) return 0; 
    return num % 10 + printNum(parseInt(num / 10));
}
console.log(printNum(113));

// Задание 3
console.log('--------------------Задание3--------------------');

function range(start, end, step) {
    console.log(start);
    for (let i = start; i < end / step; i++) {
        if (step >= 1) {
            start += step;
            console.log(start);
        } 
    }
}

range(0,11,2);

// Задание 4
console.log('--------------------Задание4--------------------');

function count(a) {
    if (a % 10 === 0) {
        return console.log(a + " товаров");
    } else {
        if (a % 10 === 1) {
            return console.log(a + " товар");
        } else {
            if (a % 10 === 2,3,4) {
            return console.log(a + " товара");
            }
        }
    }
}

count(51);

}());
