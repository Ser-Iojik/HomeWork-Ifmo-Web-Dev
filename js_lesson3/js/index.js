(function () {
    'use strict';

console.log('--------------------Задание1--------------------');

// Задание 1



console.log('--------------------Задание2--------------------');

// Задание 2

function printNum(num) {
    if (num >= 10) {
        console.log(num % 10 + Math.floor(num / 10));
        printNum(num - 1);
    } else {
        if (num <= 9 && num >= 0) {
            console.log(num);
            printNum(num - 1);
        }
    }
}
printNum(32);



console.log('--------------------Задание3--------------------');

// Задание 3



console.log('--------------------Задание4--------------------');

// Задание 4

}());
