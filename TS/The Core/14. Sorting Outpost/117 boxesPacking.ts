function boxesPacking(length: number[], width: number[], height: number[]) {
    let boxes: any = [];
    for (let i = 0; i < height.length; i++){
        const dimensions: number[] = [length[i], width[i], height[i]];
        dimensions.sort((a: number, b: number) => a - b);
        boxes.push(dimensions);
    }

    boxes.sort(checkFit);
    
    for (let i = 1; i < boxes.length; i++){
        if (checkFit(boxes[i - 1], boxes[i]) === 0) {
            return false;
        }
    }

    // i need to add more code here 
    return true
}

function checkFit(a: number, b: number) {
    if (a[0] < b[0] && a[1] < b[1] && a[2] < b[2]) {
        return -1;
    }
    if (a[0] > b[0] && a[1] > b[1] && a[2] > b[2]) {
        return 1;
    }

    return 0;
}

interface Task117 {
    l: number[];
    w: number[];
    h: number[];
    expOut: boolean;
};

const task117_1: Task117 = {l: [1, 3, 2], 
                            w: [1, 3, 2], 
                            h: [1, 3, 2],
                            expOut: true};
// console.log(task117_1.expOut, boxesPacking(task117_1.l, task117_1.w, task117_1.h));

const task117_2: Task117 = {l: [1, 1], 
                            w: [1, 1], 
                            h: [1, 1],
                            expOut: false};
// console.log(task117_2.expOut, boxesPacking(task117_2.l, task117_2.w, task117_2.h));
// 
const task117_3: Task117 = {l: [3, 1, 2], 
                            w: [3, 1, 2], 
                            h: [3, 2, 1],
                            expOut: false};
console.log(task117_3.expOut, boxesPacking(task117_3.l, task117_3.w, task117_3.h));