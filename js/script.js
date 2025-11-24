'use strict';

const inputAge = prompt('Введіть Ваш вік');

if(inputAge === null || inputAge === "") {
  alert('Вік не вказано');
} else {
  const age = Number(inputAge);

  if(isNaN(age) || age <= 0) {
    alert('Вік не коректний');
  } else if (age < 18) {
    const withAdult = confirm('Вам менше 18. Чи є з вами дорослий, який дозволяє перегляд?');

    if(withAdult) {
      alert('Доступ дозволено з дозволу дорослого.');
    } else {
      alert('Доступ заборонено.');
    }
  } else {
    alert('Доступ дозволено. Приємного перегляду!');
  }
}