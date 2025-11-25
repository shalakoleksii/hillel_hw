'use strict';

const userName = prompt("Ваше ім'я?");
const userAge = prompt("Скільки Вам років?");
const userCity = prompt("З якого Ви міста?");
const answerJS = prompt("Чи любите Ви JavaScript? (так/ні)");

if (!userName || !userAge || !userCity || !answerJS) {
  alert("Ви ввели не всі дані!");
} else {
  const age = Number(userAge);

  if (isNaN(age)) {
    alert("Ви ввели некоректний вік! Введіть число.");
  } else {
    let lovesJS;

    if (answerJS.toLowerCase() === 'так') {
      lovesJS = true;
    } else {
      lovesJS = false;
    }

    let preferenceJS;

    if (lovesJS) {
      preferenceJS = 'любите JavaScript';
    } else {
      preferenceJS = 'не любите JavaScript';
    }

    alert(`Привіт, ${userName}! Вам ${age} років, Ви з міста ${userCity}. Ви ${preferenceJS}.`);
  }
}