exports.num2wordEN = (num) => {
    num = String(Number(num));
    const first = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const second = [
        null,
        'Ten',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninty',
    ];
    const third = ['', 'Thousand', 'Million', 'Billion', 'Trillion' ];
    const tens = [null, 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    if (num === '0') {
        return 'zero';
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
            word.push('Hundred');
        }
        if (first[substr[2]]) {
            word.push(first[substr[2]]);
        }
    }
    let ans = word.reverse().join(' ');

    first.forEach((f, i) => {
        ans = ans.replace(second[1] + ' ' + f, tens[i]);
    })
    return ans;
}
