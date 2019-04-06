(function () {
    'use strict';

let goods = [
    {
        tovar: 1500
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];


function getGoods(goods, propName, from, to) {
    let outArr = [];

    for (let i in goods) {
        for (let key in goods[i]) {
            if (key == propName && goods[i][key] >= from && goods[i][key] <= to) {
                outArr.push(goods[i]);
            }
        }
    }
    return outArr;
}

console.log(getGoods(goods, "tovar", 500, 2000));




}());