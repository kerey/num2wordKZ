import {num2word} from "../../../src";

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const strInput = document.getElementById('text');
btn.addEventListener('click', function(event) {
    console.log(input.value);
    const str = input.value;
    strInput.innerText = num2word(str);
})