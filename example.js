import num2word from "./src/num2word.js";
import {ilik} from "./src/septik.js";

const input = document.getElementById('input');
const strInput = document.getElementById('text');

const ATAU = document.getElementById('atau');
const ILIK = document.getElementById('ilik');

input.addEventListener('keydown', function(event) {
    console.log(event.target.value);
    const str = event.target.value;
    const word = num2word(str);
    strInput.innerText = word;
    ATAU.innerText = word;
    ILIK.innerText = ilik(word)
});
