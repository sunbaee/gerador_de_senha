const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const createUpper = () => String.fromCharCode(random(65, 91));
const createLower = () => String.fromCharCode(random(97, 123));
const createNumber = () => String.fromCharCode(random(48, 58));

const symbols = '/?!@#$%&*()_-+=[]{}~^:;,.<>';
const createSymbols = () => symbols[random(0, symbols.length)];

export default function generatePassword(qnt, number, upper, lower, symbol) {
    const amount = Number(qnt);
    if(!amount) return 'Insira uma quantidade de caracteres.';
    if(!(number || upper || lower || symbol)) return 'Selecione pelo menos um dos campos.';

    const arrayPass = [];

    for(let i = 0; i < amount; i++) {
        number && arrayPass.push(createNumber());
         upper && arrayPass.push(createUpper());
         lower && arrayPass.push(createLower());
        symbol && arrayPass.push(createSymbols());
    }

    return arrayPass.join('').slice(0, amount);
}