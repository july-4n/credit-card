/* eslint-disable max-len */
import {el, setChildren} from 'redom';
import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css';
import IMask from 'imask';

const renderCard = () => {
  const text = el('p', {className: 'secure'}, 'Secure Checkout');
  const cardNumber = el('span', {className: 'card__number'}, 'xxxx xxxx xxxx xxxx');
  const cardPersonal = el('div', {className: 'card__personal'}, el('span', {className: 'card__name'}, 'John Doe'), el('span', {className: 'card__date'}, '04/24'));
  const creditCard = el('div', {className: 'credit-card'}, [cardNumber, cardPersonal]);
  const createFormField = (labelClass, labelText, inputClass, inputType, mod, id = '') => {
    const label = el('label', {className: labelClass}, labelText);
    const input = el('input', {type: inputType, className: inputClass, id});
    return el('div', {className: `form__input-wrap form__input-wrap_${mod}`}, label, input);
  };
  const cardHolder = createFormField('form__label form__holder-label', 'Card Holder', 'input input__holder', 'text', 'holder', 'cardHolder');
  const cardNumberForm = createFormField('form__label form__number-label', 'Card Number', 'input input__number', 'text', 'number', 'cardNumber');
  const cardDateForm = createFormField('form__label form__date-label', 'Card Expiry', 'input input__date', 'text', 'date', 'cardDate');
  const cardCvv = createFormField('form__label form__cvv-label', 'CVV', 'input input__cvv', 'text', 'cvv', 'cardCvv');
  const btn = el('button', {className: 'form__button'}, 'CHECK OUT');
  const form = el('form', {className: 'form', action: '#', id: 'form'}, [cardHolder, cardNumberForm, cardDateForm, cardCvv, btn]);
  const card = el('div', {className: 'card'}, [text, creditCard, form]);
  return el('div', {className: 'wrapper'}, card);
};
setChildren(document.body, renderCard());

const cardHolder = document.querySelector('.input__holder');
const cardName = document.querySelector('.card__name');
const inputCvv = document.querySelector('.input__cvv');
const inputCardNumber = document.querySelector('.input__number');
const cardNumber = document.querySelector('.card__number');
const inputCardDate = document.querySelector('.input__date');
const cardDate = document.querySelector('.card__date');

const getCardData = (cardInput, cardOutput) => {
  cardInput.addEventListener('input', () => {
    cardOutput.textContent = cardInput.value;
  });
};

new IMask(inputCardNumber, {
  mask: '0000 0000 0000 0000',
});

new IMask(inputCvv, {
  mask: '000',
});

getCardData(cardHolder, cardName);
getCardData(inputCardNumber, cardNumber);

datepicker('.input__date', {
  formatter: (input, date, instance) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const startMonth = 1;
    let formattedMonth;
    const resultMonth = Number(startMonth + month);
    if (resultMonth < 10) {
      formattedMonth = `0${resultMonth}`;
    } else {
      formattedMonth = resultMonth;
    }
    const formattedYear = year.toString().slice(2);

    input.value = `${formattedMonth}/${formattedYear}`;
    cardDate.textContent = input.value;
  },
});
getCardData(inputCardDate, cardDate);
