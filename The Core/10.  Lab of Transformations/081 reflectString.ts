function reflectString(inputString: string): string {
    let map: number[] = [];
    let endCode: number = 122;
    for (let i = 97; i < 123; i++) {
        map[i] = endCode;
        endCode--;        
    }

    const result: string = inputString
        .split('')
        .map((el: string) => {
            return String.fromCharCode(map[el.charCodeAt(0)]);
        })
        .join('');

    return result;
}

console.log(reflectString('name'), '| mznv');