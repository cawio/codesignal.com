function cipher26(message: string): string {
    let map: string[] = Array(26).fill('');
    let charCode: number = 97;
    map.forEach((_, i: number, arr: string[]) => {
        arr[i] = String.fromCharCode(charCode);
        charCode++;
    });
    console.table(map);

    // let messageArr: string[] = message.split('');
    // let sum: number = map.indexOf(messageArr[0]);
    // let result: string = messageArr[0];
    // messageArr.forEach((el: string, index: number) => {
    //     if (index != 0) {
    //         for (let i = 0; i < 26; i++) {
    //             if((sum + i) % 26 === map.indexOf(el)) {
    //                 result += map[i];
    //                 sum += i;
    //             }
    //         }
    //     }
    // });

    // return result;
    
    let sum: number = 0;

    return message
        .split('')
        .map((el: string) => {
            for (let i = 0; i < 26; i++) {
                if((sum + i) % 26 === map.indexOf(el)) {
                    sum += i;
                    return map[i];
                }
            }
        })
        .join('');
}

console.log(cipher26('ftnexvoky'));
