export function num2word(num) {
    num = String(Number(num));
    const first = [null, 'бір', 'екі', 'үш', 'төрт', 'бес', 'алты', 'жеті', 'сегіз', 'тоғыз'];
    const second = [
        null,
        'он',
        'жиырма',
        'отыз',
        'қырық',
        'елу',
        'алпыс',
        'жетпіс',
        'сексен',
        'тоқсан',
    ];
    const third = ['', 'мың', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион'];
    if (num === '0') {
        return 'нөл';
    }
    const str = (['', '00', '0'][num.length % 3] + num)
        .split('')
        .reverse()
        .join('');
    const word = [];
    for (let i = 0; i < str.length / 3; i++) {
        const substr = str.substr(i * 3, 3);
        if (substr !== '000') {
            word.push(third[i]);
        }
        if (first[substr[0]]) {
            word.push(first[substr[0]]);
        }
        if (second[substr[1]]) {
            word.push(second[substr[1]]);
        }
        if (first[substr[2]]) {
            word.push('жүз');
        }
        if (first[substr[2]]) {
            word.push(first[substr[2]]);
        }
    }
    return word.reverse().join(' ').trim();
}