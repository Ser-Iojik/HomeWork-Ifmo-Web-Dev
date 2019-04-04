console.log('--------------------Задание1--------------------');

function strReplace(str, needle, replacement) {
    if(! str) str = '';
    if(! needle) needle = '';
    if(! replacement) replacement = '';
    console.log('Исходная строка: "' + str+'"');
    console.log('Что ищем: "' + needle+'"');
    console.log('На что заменяем: "' + replacement+'"');
    let out = '';
    out = str.replace(needle, replacement); // str.replace заменяет первое значение на второе) Ps. личная записка
    console.log(out);
    return out;
}

let str = prompt('Введите строку, в которой нужно совершить поиск');
let needle = prompt('Введите строку, которую нужно найти');
let replacement = prompt('Введите строку, на которую нужно заменить');
strReplace(str, needle, replacement);

console.log('--------------------Задание2--------------------');

function NumberArrFromStr(str) {
    if(! str) return [];
    return str.match(/(\d+)/g);
}

str = 'дом 48, корпус 9, парадная 7, этаж 4';

console.log(NumberArrFromStr(str));

console.log('--------------------Задание3--------------------');

function SortCityStr(str) {
    if(! str) return '';
    return str.match(/([\w|А-я-]+)/g).sort().toString().replace(/,/g, " ");
}

console.log(SortCityStr('Псков Рязань Новгород Находка Иркутск'));
