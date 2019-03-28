// Задание 1

let height = 10;
let length = 15;
let width = 5;

let square = length * width * 2 + length * height * 2 + height * width * 2;

console.log(square);

res = width > height ? "Ширина больше" : "Высота больше";

console.log(res);

// Задание 2

let square1 = 10000; // Площадь участка
let square2 = 15 * 25; // Площадь грядок

let remainder1 = square1 - square2; // Оставшееся место

console.log(remainder1);

// Задание 3

let square3 = 1500; // Площадь овала
let square4 = 600; // Площадь выреза

let remainder2 = square3 - square4; // Оставшееся место

console.log(remainder2);

// Задание 4

let X = 10;
let Y = 8;
let N

X > Y ? (N = X, X = Y, Y = N) : (X = X, Y = Y);

console.log('X =',X,'Y =',Y);

// Задание 5

let m = 10.5;
let n = 5;

res1 = m > 10 ? a = 10 - m : a = m - 10;

res2 = n > 10 ? b = 10 - n : b = n - 10;

res = res1 > res2 ? "Число m ближайшее к 10" : "Число n ближайшее к 10";

console.log(res);