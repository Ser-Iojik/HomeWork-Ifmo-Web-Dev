(function () {
    'use strict';


// для домашнего задания номер 1 и 2
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};


// для домашнего задания номер 3
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];

/*  Написать функцию со следующими аргументами: объект, from (значение от), to (значение до).
    Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to.
    Пример вызова функции getGoods(goods, 2000, 3000);
    в данном случае функция должна вернуть все товары,
    у которых цена в диапазоне от 2000 до 3000.
    Для проверки функции используйте объект goods из файла с урока. */
console.log('--------------------Задание1--------------------');

function getGoods(goods, from, to) {
    let outArr = [];

    for (let i in goods) {
        for (let key in goods[i]) {
            if (goods[i][key] >= from && goods[i][key] <= to) {
                outArr.push(goods[i]);
            }
        }
    }
    return outArr;
}

// можно добавить в функцию ещё один аргумент под названием cost, который будет отвечать конктерно за стоимость товара

console.log(getGoods(goods, 3000, 3200));

/* 
    Написать функцию addToCart(obj, title, countToCart) {},
    где obj - объект, title - название товара,
    count - количество товара, которое нужно добавить в корзину.
    Функция ищет товар с указанным названием, если количество позволяет,
    то уменьшает количество товара на countToCart, если не позволяет,
    то выводит информацию об этом в консоль и завершает работу.
    Для проверки функции используйте объект goods из файла с урока. */
console.log('--------------------Задание2--------------------');

function addToCart(obj, title, countToCart){
    for (let prop in obj) {
        let thisObj = obj[prop];
        if (thisObj.title === title) {
            if (thisObj.count < countToCart){
                return "Нужное кол-во товара отсутствует на скаде";
            }else{
                console.log('Товар: '+title+', количество:'+countToCart+'шт. - добавлен');
                obj[prop].count = (thisObj.count - countToCart);
                return obj[prop];
            }
        }
    }
};
console.log(addToCart(goods, "Пианино", 17));

/* 
    Напишите функцию, которая отсортирует массив объектов books
    по значению свойства title. Объект в файле с занятия. */
console.log('--------------------Задание3--------------------');

function getBooks(arr, propName, propValue) {
    let outArr = [];

    for (let i in arr) {
        for (let key in arr[i]) {
            if (key == propName && propValue == arr[i][key]) {
                outArr.push(arr[i]);
            }
        }
    }
    return outArr;
}

console.log(getBooks(books, "title", "Война и мир"));

/* 
    Создайте объект с днями недели. Ключами в нем должны служить номера дней
    от начала недели (понедельник - первый и т.д.).
    Выведите на экран текущий день недели. */
console.log('--------------------Задание4--------------------');

let days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};
function getNameDay(object){
    let date = new Date();
    let day = date.getDay();
    for (let prop in object){
        if (day === +prop){
            return object[prop];
        }
    }
};
console.log(getNameDay(days));

}());