function digitsProduct(product: number): number {
    let result: string = '';
    if (product < 10 ) {
        if (product == 0) {
            return 10;
        }
        return product;
    }
    else {
        let factorsArr: number[] = [];
        for (let i = 9; i > 1; i--) {
            for (let j = 0; product % i == 0; j++) {
                product = Math.floor(product / i);
                factorsArr.push(i);
            }
        }
        let stringFactors: string[] = factorsArr.map(elem => {
            return elem.toString();
        });
        if (stringFactors.length == 0) {
            return -1;
        }
        stringFactors.sort().forEach(elem => {
            result += elem;
        });
    }
    if (result.length < 2) {
        return -1;
    }
    return Number(result);
}

function tryAll() {
    for (let i = 0; i < 601; i++) {
        let thisResult: number = digitsProduct(i)
        if (thisResult == -1) {
            console.log(`result is -1 with the number ${i}`);
        }
        else if (thisResult > 0) {
            console.log(`result is ${thisResult} with the number ${i}`);
        }
        else {
            console.log('something is wrong')
        }
    }
}

let testProduct1: number = 12;      //26
let testProduct2: number = 19;      //-1
let testProduct3: number = 450;     //2559
let testProduct4: number = 0;       //10
let testProduct5: number = 13;      //-1
let testProduct6: number = 1;       //1
let testProduct7: number = 243;     //399
let testProduct8: number = 576;     //889
let testProduct9: number = 360;     //589
let testProduct0: number = 22;      //-1

// console.log(tryAll());

// console.log(digitsProduct(testProduct1));
// console.log(digitsProduct(testProduct2));
// console.log(digitsProduct(testProduct3));
// console.log(digitsProduct(testProduct4));
// console.log(digitsProduct(testProduct5));
// console.log(digitsProduct(testProduct6));
// console.log(digitsProduct(testProduct7));
// console.log(digitsProduct(testProduct8));
// console.log(digitsProduct(testProduct9));
console.log(digitsProduct(testProduct0));