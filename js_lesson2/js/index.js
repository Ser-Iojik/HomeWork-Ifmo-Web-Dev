console.log('--------------------Задание1--------------------');


// Задание 1

console.log('--------------------Задание2--------------------');


// Задание 2

for (let num = 1; num < 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num, " =TreeFive");
    } else {
        if (num % 3 === 0) {
        console.log(num, " =Tree");
    } else {
        if (num % 5 === 0) {
        console.log(num, " =Five");
    }
    else {
        console.log(num);
            }
        }
    }
}

console.log('--------------------Задание3--------------------');


// Задание 3

let a = 3;
let b = 4;
let c = 5;

if((a >= b + c) || (b >= a + c) || (c >= a + b)) {
    console.log("Не существует")
    } else {
        if((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)){
    console.log("Существует " + "Прямоугольный") // Если треугольник прямоугольный
        } else {
            if((a * a < b * b + c * c) && (b * b < a * a + c * c) && (c * c < a * a + b * b)){
        console.log("Существует " + "Остроугольный") // Если треугольник остроугольный
            } else {
            console.log("Существует " + "Тупоугольный"); // Если треугольник тупойгольный
            }
        }
    }
    
console.log('--------------------Задание4,1--------------------');


// Задание 4,1

let length = prompt('Введите длинну массива');
let arr4 = [];
for(let i=0; i<length; i++)
{
    arr4.push(parseInt(Math.random()*100));
}
console.log(arr4);
for(let i=0; i<length; i++)
{
    console.log(arr4.pop());
}

console.log('--------------------Задание4,2--------------------');


// Задание 4,2

let two = 2;
let ten = 10;
let factor = 1;
let answer;

while(ten){
    answer = two * factor;
    console.log(answer);
    two = answer * 2;
    ten--;
}

console.log('--------------------Задание4,3--------------------');


// Задание 4,3

let sharp = "#";
let quantity = 10;

while(quantity){
    console.log(sharp);
    sharp = sharp + "#";
    quantity--;
}

console.log('--------------------Задание5--------------------');

// Задание 5

let dish = 10;
let soap = 6;

for(let i=dish; i>0; i--){

        if(soap < 0.5) break;
        soap = soap - 0.5;
        dish--;
        console.log('Тарелку вымыли');
        console.log("Осталось моющего средства " + soap);
    }

if(dish > 0){
    console.log("Итого осталось грязных тарелок " + dish);
}
else{
    console.log("Итого осталось моющего средства " + soap);
}

console.log('--------------------Задание6--------------------');

// Задание 6
// Программа работает с числом 10000, но с чилом 100 нагляднее


for (let num = 0; num < 99; num++) {
    num = num + ""; 
    for (let a = 0; a < num.length; a++) {
        if (num[a] == 4) {
            console.log(num + "-Несчастливое число");
        } else {
            if (num == 13){
                console.log(num + "-Несчастливое число");
            }
        }
    }
}



console.log('--------------------Задание7--------------------');

// Задание 7

let month = new Date().getMonth(); 

if(month == 11 || month == 0 || month == 1) {
    console.log("Winter");
} else {
    if(month == 2 || month == 3 || month == 4) {
    console.log("Spring");
    } else {
        if(month == 5 || month == 6 || month == 7) {
            console.log("Summer");
        } else {
            if(month == 8 || month == 9 || month == 10) {
            console.log("Autumn");
            }
        }
    }
}

console.log('--------------------Конец--------------------');

