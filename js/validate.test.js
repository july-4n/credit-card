import {
  isValidName,
  isValidCardNumber,
  isValidCVV,
} from './validate.js';

describe('Проверка валидности имени', () => {
  it('Корректный ввод', () => {
    expect(isValidName('Vasya Vasyliev')).toBe(true);
  });

  it('Ввод одного слова', () => {
    expect(isValidName('Vasya')).toBe(false);
  });

  it('Ввод имени на кириллице', () => {
    expect(isValidName('Василий')).toBe(false);
  });

  it('Ввод цифр в имени', () => {
    expect(isValidName('Василий12')).toBe(false);
  });
});

describe('Проверка валидности номера карты', () => {
  it('Корректный ввод', () => {
    expect(isValidCardNumber('1234123412341234')).toBe(true);
  });

  it('Ввод цифр и символов латиницы', () => {
    expect(isValidCardNumber('1234Vasya1234567')).toBe(false);
  });

  it('Ввод цифр и символов кириллицы', () => {
    expect(isValidCardNumber('1234Василий12345')).toBe(false);
  });

  it('Ввод знаков препинания', () => {
    expect(isValidCardNumber('1234,1234:!12345%')).toBe(false);
  });

  it('Ввод большого количества цифр', () => {
    expect(isValidCardNumber('12341234123412345')).toBe(false);
  });

  it('Ввод малого количества цифр', () => {
    expect(isValidCardNumber('123412341234123')).toBe(false);
  });
});

describe('Проверка валидности CVV', () => {
  it('Корректный ввод', () => {
    expect(isValidCVV('123')).toBe(true);
  });

  it('Ввод цифр и символов латиницы', () => {
    expect(isValidCVV('1l2')).toBe(false);
  });

  it('Ввод цифр и символов кириллицы', () => {
    expect(isValidCVV('4В1')).toBe(false);
  });

  it('Ввод знаков препинания', () => {
    expect(isValidCVV('4:1')).toBe(false);
  });

  it('Ввод большого количества цифр', () => {
    expect(isValidCVV('1234')).toBe(false);
  });

  it('Ввод малого количества цифр', () => {
    expect(isValidCVV('5')).toBe(false);
  });
});
