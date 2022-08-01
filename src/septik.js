// import {num2wordKZ} from './num2wordKZ.js';
const mod = require('./num2wordKZ.js');

const ilik = (str) => {
    const zhalgaular = ['ның', 'нің', 'дың', 'дің', 'тың', 'тің'];
    console.log(str.trim());
    console.log(str[str.length - 1]);
    const zhuanN = ['а', 'ы', '']
    const zhinishkeN = ['ә', '', '']
}

ilik(mod.num2wordKZ(12));

exports.ilik = ilik;
