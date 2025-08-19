"use strict";

// Условное ветвление: if, '?'.

// Логические операторы

// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true

// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(true)); // true
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(-Infinity)); // true

// Оператор || выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение.
// Если результат true, останавливается и возвращает исходное значение
// этого операнда.
// Если все операнды являются ложными (false), возвращает последний из них.

// Оператор && выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение.
// Если результат false, останавливается и возвращает исходное значение
// этого операнда.
// Если все операнды были истинными, возвращается последний.

// let login = prompt("Введите логин");
// let password = "";

// if (login === "Админ") {
//   password = prompt("Введите пароль");
// } else if (login === null || login === "") {
//   alert("Я вас не знаю");
// }

// if (password === "Я главный") {
//   alert("Здравствуйте!");
// } else if (password === null || password === "") {
//   alert("Отменено");
// } else {
//   alert("Неверный пароль");
// }

// Операторы нулевого слияния и присваивания: '??', '??='