function cyclicString(s: string): number {
    let result: number = s.length;
    for (let i = s.length - 1; i > 0; i--) {
        let s2: string = s.slice(i);
        let eval: boolean = true;
        for (let j = 0; j < s2.length; j++) {
            if (s[j] !== s2[j]) {
                eval = false;
                break;
            }
        }

        if (eval) {
            result = s.length - s2.length;
        }
    }

    return result;
}

console.log(cyclicString('cabca'))