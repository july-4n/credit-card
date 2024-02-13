import IMask from 'imask';
import {cardHolder, inputCvv, inputCardNumber, formBtn,
  validationMessage} from './create.js';

new IMask(inputCardNumber, {
  mask: '0000 0000 0000 0000',
});

new IMask(inputCvv, {
  mask: '000',
});

const isValidName = (str) => {
  if (typeof str !== 'string') {
    return false;
  }

  const words = str.split(' ');
  if (words.length !== 2) {
    return false;
  }

  const latinLettersRegex = /^[a-zA-Z]+$/;
  for (const word of words) {
    if (!latinLettersRegex.test(word)) {
      return false;
    }
  }

  return true;
};

const isValidCardNumber = (cardNumber) => {
  const numRegex = /^[0-9]{16}$/;

  if (!numRegex.test(cardNumber)) return false;
  return true;
};

const isValidCVV = (cvv) => {
  const numRegex = /^[0-9]{3}$/;

  if (!numRegex.test(cvv)) return false;
  return true;
};

formBtn.addEventListener('click', () => {
  const validName = isValidName(cardHolder.value);
  const cardNumberValue = inputCardNumber.value.replace(/\s/g, '');
  const validCardNumber = isValidCardNumber(cardNumberValue);
  const validCvv = isValidCVV(inputCvv.value);

  if (validName && validCardNumber && validCvv) {
    validationMessage.textContent = "Введены корректные данные"
  } else {
    validationMessage.textContent = "Введены не корректные данные"
  }

  setTimeout(() => {
    validationMessage.textContent = '';
  }, 2000);
});

export {
  isValidName,
  isValidCardNumber,
  isValidCVV,
};
