import './assets/css/styles.css';
import generatePassword from './modules/generatePass';

/* INPUTS */

const quantity = document.querySelector('#qntchar'),
      num = document.querySelector('#num'),
      upper = document.querySelector('#upper'),
      lower = document.querySelector('#lower'),
      symbols = document.querySelector('#symbols');

/* Comandos */

const generate = document.querySelector('.generate'),
      senha = document.querySelector('.senha');

generate.addEventListener('click', () => {
    senha.innerText = generatePassword(
        quantity.value,
        num.checked,
        upper.checked,
        lower.checked,
        symbols.checked
    );
})