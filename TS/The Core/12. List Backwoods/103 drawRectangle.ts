function drawRectangle(canvas: string[][], rectangle: number[]): string[][] {
    //set corners *
    canvas[rectangle[1]][rectangle[0]] = '*';
    canvas[rectangle[1]][rectangle[2]] = '*';
    canvas[rectangle[3]][rectangle[0]] = '*';
    canvas[rectangle[3]][rectangle[2]] = '*';

    // draw top and bottom
    for (let i = rectangle[0] + 1; i < rectangle[2]; i++) {
        canvas[rectangle[1]][i] = '-';
        canvas[rectangle[3]][i] = '-';
    }

    // draw sides
    for (let i = rectangle[1] + 1; i < rectangle[3]; i++) {
        canvas[i][rectangle[0]] = '|';
        canvas[i][rectangle[2]] = '|';
    }

    console.table(canvas);
    return canvas;
}

interface Task102 {
    canvas: string[][];
    cords: number[] 
}

const task102_1: Task102 = {
    canvas: [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
             ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
             ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
             ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
             ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']],
    cords: [1, 1, 4, 3]
}

console.log(drawRectangle(task102_1.canvas, task102_1.cords));