function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let daysNeeded: number = 0;
    let currentHeight: number = 0;
    for (let i = 0; currentHeight <= desiredHeight; i++) {
        currentHeight += upSpeed;
        daysNeeded++;
        if(currentHeight >= desiredHeight) {
            return daysNeeded;
        }
        currentHeight -= downSpeed;
    }
    
    return daysNeeded;
}

let upSpeed:  number = 100;
let downSpeed: number = 10;
let desiredHeight: number = 910;

let upSpeed2: number = 5;
let downSpeed2: number = 2;
let desiredHeight2: number = 7;

console.log(growingPlant(upSpeed, downSpeed, desiredHeight));
console.log(growingPlant(upSpeed2, downSpeed2, desiredHeight2));