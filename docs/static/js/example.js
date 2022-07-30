import {num2word} from "../../../src";

const input = document.getElementById('input');
const strInput = document.getElementById('text');
input.addEventListener('change', function(event) {
    console.log(input.target.value);
    const str = input.target.value;
    strInput.innerText = num2word(str);
});
