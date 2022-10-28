function isTandemRepeat(inputString: string): boolean {
    if (inputString.length % 2 != 0) {
        return false;
    }
    const split: string[] = [inputString.substring(0, inputString.length / 2 + 1), inputString.substring(inputString.length / 2)];
    console.log(split);

    return inputString.substring(0, inputString.length / 2) === inputString.substring(inputString.length / 2);
}

console.log(isTandemRepeat('TandemTandem'));

const task52_Test1: string = 'TandemTandem';
