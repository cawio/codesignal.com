function stolenLunch(note: string): string {
    let map: string[] = Array(10).fill('');
    let charCode: number = 97;
    map.forEach((_, i: number, arr: string[]) => {
        arr[i] = String.fromCharCode(charCode);
        charCode++;
    });
    console.table(map);

    return note
        .split('')
        .map((el: string) => {
            if (!isNaN(parseInt(el))) {
                return map[parseInt(el)];
            }
            else {
                if (map.includes(el)) {
                    return map.indexOf(el).toString();
                } 
                return el;
            }
        })
        .join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));