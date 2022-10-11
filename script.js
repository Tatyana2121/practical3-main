'use strict';
// function calculateArea(r){
//     let area;
//     if(r<=0){
//         return 0;
//     }else{
//         area = Math.PI * r *r;
//         return area;
//     }
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let txt = 'js';
// console.log(txt.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
//let txt = 'я люблю JS!';
//console.log(txt.length);

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:
//let years = age * 2;
//let myDog = 'Rex';
// let guests = 2;
// Функции:
// function dogYears(dogName, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// function secret(){
//     console.log('The secret of life is 28');
// }
// Встроенные функции:
//не нашла
// Аргументы:
// dogYears(myDog, 4);
// makeTea(guests, 'Earl Grey');
// Параметры:
// function dogYears(dogName, age)
//function makeTea (cups, tea)


// function dogYears(dogName, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log('JS'.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
console.log('я люблю JS!'.substr(2, 5));
console.log('я люблю JS!'.substr(8, 2));
console.log('я люблю JS!'.substring(2, 7));
console.log('я люблю JS!'.substring(10, 8));
console.log('я люблю JS!'.slice(2, 7));
console.log('я люблю JS!'.slice(-3, -1));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
console.log('я люблю JS!'.search('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt = 'я люблю JS!';
let n = 9;
let result = '';
if (txt.length > n) {
    result = `${txt.slice(0, n)}...`
    console.log(result);
} else {
    result = txt;
    console.log(result);
}

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let text = 'Я-люблю-JS!';
console.log(text.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let texts = 'я люблю JS';
let array = texts.split(' ');
console.log(array);
// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let str = 'привет мир';
let arr = str.split('');
console.log(arr);