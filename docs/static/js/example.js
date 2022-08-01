// import {num2wordKZ} from "../../../src/num2wordKZ.js";
const mod = require('../../../src/num2wordKZ.js');

const input = document.getElementById('input');
const strInput = document.getElementById('text');
input.addEventListener('change', function(event) {
    console.log(input.target.value);
    const str = input.target.value;
    strInput.innerText = mod.num2wordKZ(str);
});
