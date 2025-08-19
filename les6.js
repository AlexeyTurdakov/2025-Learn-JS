"use strict";

// // циклы

// Натуральное число, большее 1, называется простым, если оно ни на что не делится,
//  кроме себя и 1.

// Другим словами, n > 1 – простое, если при его делении на любое число кроме
//  1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка
// на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

// ===== РЕШЕНИЕ 1: Базовый алгоритм =====

function findPrimesBasic(n) {
  const primes = [];

  // Перебираем все числа от 2 до n
  for (let num = 2; num <= n; num++) {
    let isPrime = true;

    // Проверяем, делится ли число на числа от 2 до корня из num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break; // Если нашли делитель, дальше проверять не нужно
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}

// ===== РЕШЕНИЕ 2: Решето Эратосфена (более эффективно) =====

function findPrimesSieve(n) {
  // Создаем массив, где true означает, что число простое
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 и 1 не являются простыми

  // Применяем решето Эратосфена
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      // Вычеркиваем все кратные числа i
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Собираем все простые числа
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// ===== РЕШЕНИЕ 3: Функция для проверки отдельного числа =====

function isPrimeNumber(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Проверяем только нечетные делители до корня из числа
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimesWithCheck(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrimeNumber(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// ===== ТЕСТИРОВАНИЕ =====

console.log("=== ПОИСК ПРОСТЫХ ЧИСЕЛ ===");

// Тест для n = 10
const n = 10;
console.log(`\nДля n = ${n}:`);

console.log("Базовый алгоритм:", findPrimesBasic(n));
console.log("Решето Эратосфена:", findPrimesSieve(n));
console.log("С проверкой каждого числа:", findPrimesWithCheck(n));

// Тест для других значений
const testValues = [20, 50, 100];

testValues.forEach((testN) => {
  console.log(`\nДля n = ${testN}:`);
  console.log("Простые числа:", findPrimesSieve(testN));
});

// ===== ИНТЕРАКТИВНАЯ ФУНКЦИЯ =====

function findPrimesInRange(start, end) {
  if (start < 2) start = 2; // Простые числа начинаются с 2

  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrimeNumber(num)) {
      primes.push(num);
    }
  }

  return primes;
}

// Примеры использования
console.log("\n=== ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ ===");
console.log("Простые числа от 15 до 30:", findPrimesInRange(15, 30));
console.log("Простые числа от 100 до 120:", findPrimesInRange(100, 120));

// ===== ВЫВОД РЕЗУЛЬТАТА В HTML (если нужно) =====

function displayPrimesInHTML(n) {
  const primes = findPrimesSieve(n);
  const result = `Простые числа от 2 до ${n}: ${primes.join(", ")}`;

  // Если есть элемент с id="result", выводим туда
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerHTML = result;
  }

  return result;
}

// Экспортируем функции для использования в других файлах
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    findPrimesBasic,
    findPrimesSieve,
    isPrimeNumber,
    findPrimesInRange,
    displayPrimesInHTML,
  };
}
