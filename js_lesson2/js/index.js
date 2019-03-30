// Задание 1

// Задание 2

let num = 1;

for ( ; num < 100; num++) {
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

// Задание 3

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

console.log('-------------------------------------');

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

console.log('-------------------------------------');

// Задание 4,3

let sharp = "#";
let quantity = 10;

while(quantity){
    console.log(sharp);
    sharp = sharp + "#";
    quantity--;
}

console.log('-------------------------------------');

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

console.log('-------------------------------------');

// Задание 6

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
