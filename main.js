'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const getRandomNumber = function () {
  return Math.floor(Math.random() * 100) + 1;
};

const foo = function () {
  const again = confirm('Хотите сыграть ещё!');

  if (again) {
    game();
  } else {
    alert('До свидания!');
  }
};

const game = function () {
  const randomNumber = getRandomNumber();

  return (function repeat() {
    const num = prompt('Введите число от 1 до 100');

    if (isNumber(num)) {
      if (randomNumber > num) {
        alert('Загаданное число больше');

      } else if (randomNumber < num) {
        alert('Загаданное число меньше');

      } else {
        alert('Ты выиграл!');
        return foo();
      }
    } else {
      if (num === null) {
        return;
      }
    }
    repeat();
  })();
};
game();