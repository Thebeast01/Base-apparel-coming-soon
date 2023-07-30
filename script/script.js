'use strict';

const button = document.querySelector('.btn');
const errorIcon = document.querySelector('.error');
const errorMsg = document.querySelector('.error-text');
const mailValue = document.getElementById('Email');

function emailValidation() {
  if (
    !mailValue.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) ||
    mailValue.value === ''
  ) {
    errorIcon.classList.remove('hidden');
    errorMsg.classList.remove('hidden');
  } else {
    errorIcon.classList.add('hidden');
    errorMsg.classList.add('hidden');
  }
}
