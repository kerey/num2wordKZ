const zhuan = ['а', 'ы', 'о','ұ','у'];
const zhinishke = ['ә', 'ө', 'ү','і','е','э','и'];
const qatan = ['к','қ','х','с','ц','т','ч','ш','щ','п','ф','һ'];
const uian = ['р','й','у','л','м','н','ң'];
const undi = ['б','в','г','д','ж','з'];

const getLast = (last) => {
    const first = ['ның', 'нің'];
    const second = ['дың', 'дің'];
    const third = ['тың', 'тің'];
    const nn = ['м','н','ң','а','о','е','і','ы'];
    const dd = ['р','л','й','и','ю','ж','з','у'];
    const tt = ['б','в','г','д','к','қ','х','с','ц','т','ч','ш','щ','п','ф','һ'];
    if (nn.includes(last)) {
        return first;
    }
    if (dd.includes(last)) {
        return second;
    }
    if (tt.includes(last)) {
        return third;
    }
}
export const ilik = (str) => {
    const last = str[str.length - 1];
    const last2 = str.substring(str.length - 2, str.length);
    const jalgau = getLast(last);
    if (zhuan.includes(last2[0]) || zhuan.includes(last2[1])) {
        return str + jalgau[0];
    } else {
        return str + jalgau[1];
    }
}
