function extaNumber(a: number, b: number, c: number): number {
    if(a == b) {
        return c;
    } else if (a == c) {
        return b;
    }
    return a;
}
