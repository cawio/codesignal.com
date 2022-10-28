function rectangleRotation(a: number, b: number): number {
    const initialRectangle: number[][] = [[-a / 2, b / 2 ], [a / 2, b / 2], [a / 2, - b / 2], [-a / 2, -b / 2]];
    const rotatedRectangle: number[][] = initialRectangle.map((el: number[]) => {
        let x: number = el[0];
        let y: number = el[1];
        let radians: number = (Math.PI / 180) * -45;
        let cos: number = Math.cos(radians);
        let sin: number = Math.sin(radians);
        let nx: number = (cos * (x - 0)) + (sin * (y - 0)) + 0;
        let ny: number = (cos * (y - 0)) - (sin * (x - 0)) + 0;

        return [nx, ny];
    });

    let count: number = 0;
    let curX: number = Math.ceil(rotatedRectangle[0][0]);
    let firstSwap: number = 0;
    let secondSwap: number = 0;
    let mode: string = '';
    if (a >= b) {
        mode = 'a > b';
        firstSwap = rotatedRectangle[3][0];
        secondSwap = rotatedRectangle[1][0];
    } else {
        firstSwap = rotatedRectangle[1][0];
        secondSwap = rotatedRectangle[3][0];
    }

    function countIntegerPoints(m1: number, m2: number, x: number, hx1: number, hy1: number, lx1: number, ly1: number): void {
        let highest: number = m1 * (x - hx1) + hy1;
        let lowest: number = m2 * (x - lx1) + ly1;
        for (let i = Math.floor(highest); i > lowest; i--) {
            count++;
        }
    }

    /*  y = m · x + t  | y = m (x − x1) + y1
        upperBorder => y = x + [0][0] - [0][1]
        leftBorder => y = -x - [0][0] - [0][1]
        lowerBorder => y = x - [3][0] - [3][1]
        rightBorder => y = -x + [1][0] - [1][1]
    */

    while (curX <= rotatedRectangle[2][0]) {    
        if (curX <= firstSwap) {                                                    //sector1
            console.log('sector 1', count);
            countIntegerPoints(1, -1, curX, rotatedRectangle[0][0], rotatedRectangle[0][1], rotatedRectangle[0][0], rotatedRectangle[0][1])
            // let highest: number = 1 * (curX - rotatedRectangle[0][0]) + rotatedRectangle[0][1];
            // let lowest: number = -1 * (curX - rotatedRectangle[0][0]) + rotatedRectangle[0][1];
            // for (let i = Math.floor(highest); i > lowest; i--) {
            //     count++;
            // }
        } else if (curX > firstSwap && curX <= secondSwap) {                        //sector2 a > b
            console.log('sector 2', count);
            if (mode === 'a > b') {
                countIntegerPoints(1, 1, curX, rotatedRectangle[0][0], rotatedRectangle[0][1], rotatedRectangle[3][0], rotatedRectangle[3][1])
                // let highest = 1 * (curX - rotatedRectangle[0][0]) + rotatedRectangle[0][1];
                // let lowest: number = 1 * (curX - rotatedRectangle[3][0]) + rotatedRectangle[3][1];
                // for (let i = Math.floor(highest); i > lowest; i--) {
                //     count++;
                // }
            } else {                 
                countIntegerPoints(-1, -1, curX, rotatedRectangle[1][0], rotatedRectangle[1][1], rotatedRectangle[3][0], rotatedRectangle[3][1])                                               //sector2 a < b
                // let highest = -1 * (curX - rotatedRectangle[1][0]) + rotatedRectangle[1][1];
                // let lowest: number = -1 * (curX - rotatedRectangle[3][0]) + rotatedRectangle[3][1];
                // for (let i = Math.floor(highest); i > lowest; i--) {
                //     count++;
                // }
            }
        } else {                                                                    //sector3
            console.log('sector 3', count);
            countIntegerPoints(-1, 1, curX, rotatedRectangle[1][0], rotatedRectangle[1][1], rotatedRectangle[3][0], rotatedRectangle[3][1])
            // let highest: number = -1 * (curX - rotatedRectangle[1][0]) + rotatedRectangle[1][1];
            // let lowest: number = 1 * (curX - rotatedRectangle[3][0]) + rotatedRectangle[3][1];
            // for (let i = Math.floor(highest); i > lowest; i--) {
            //     count++;
            // }
        }
        curX++;
    }

    return count;
}

let task49_Test1: number[] = [6, 4, 23];
let task49_Test4: number[] = [16, 20, 333];

console.log(rectangleRotation(task49_Test1[0], task49_Test1[1]));
console.log(rectangleRotation(task49_Test4[0], task49_Test4[1]));
