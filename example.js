import num2word from "./src/num2word.js";

const input = document.getElementById('input');
const strInput = document.getElementById('text');
input.addEventListener('keydown', function(event) {
    console.log(event.target.value);
    const str = event.target.value;
    strInput.innerText = num2word(str);
});
