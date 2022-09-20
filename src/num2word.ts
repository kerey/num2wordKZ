export default function num2word(n: number): string {
    const num = String(n);
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
    const word: string[] = [];
    for (let i = 0; i < str.length / 3; i++) {
        const substr = str.substr(i * 3, 3);
        if (substr !== '000') {
            word.push(third[i]);
        }
        if (first[Number(substr[0])]) {
            word.push(first[Number(substr[0])] as string);
        }
        if (second[Number(substr[1])]) {
            word.push(second[Number(substr[1])] as string);
        }
        if (first[Number(substr[2])]) {
            word.push('жүз');
        }
        if (first[Number(substr[2])]) {
            word.push(first[Number(substr[2])] as string);
        }
    }
    return word.reverse().join(' ').trim();
}
