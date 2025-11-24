'use strict';

const priceInput = prompt('Введіть початкову ціну товару');
const price = Number(priceInput);

if(isNaN(price) || price <= 0) {
  alert('Помилка вводу')
} else {
  const discountInput = prompt('Введіть розмір знижки у відсотках');
  const discount = Number(discountInput);

  if(isNaN(discount) || discount <= 0) {
    alert('Помилка вводу')
  } else {
    const discountedPrice = price - (price * discount / 100);
    alert(`Початкова ціна: ${price} грн, знижка: ${discount}%. Ціна зі знижкою: ${discountedPrice} грн`)
  }
}