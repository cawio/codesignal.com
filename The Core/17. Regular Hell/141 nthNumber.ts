function nthNumber(s: string, n: number) {
    let re: RegExp = new RegExp("(([1-9]+[0-9]*).*?){"+n+"}");
    let match: RegExpExecArray = re.exec(s);

    return re.exec(s)[1];
}

console.log(
    nthNumber('8one 003number 201numbers li-000233le number444', 4),
    233
);