function chessBishopDream(boardSize: number[], initPosition: number[], initDirection: number[], k: number): number[] {
    let currentx = initPosition[1];
    let currenty = initPosition[0];
    let xDirection = initDirection[1];
    let yDirection = initDirection[0];
    let h = boardSize[0]; // bottom
    let w = boardSize[1]
    let rounds = k % (h * 2)
    
    while(rounds > 0){
        currenty += yDirection
        if(currenty < 0 || currenty >= h ){
            yDirection *= -1;
            rounds++
        }
        rounds--;
    }
    rounds = k % (w * 2)
    
    while(rounds > 0){
        currentx += xDirection
        if(currentx < 0 || currentx >= w ){
            xDirection *= -1;
            rounds++
        }
        rounds--;
    }
    
    
    return [currenty, currentx];
}

interface Task126 {
    bS: number[];
    iP: number[];
    iD: number[];
    k: number;
    expOut: number[]
}

const task126_1: Task126 = {
    bS: [3, 7],
    iP: [1, 2],
    iD: [-1, 1],
    k: 13,
    expOut: [0, 1]
};

console.log(
    'expOut:',
    task126_1.expOut,
    '| myOut:',
    chessBishopDream(task126_1.bS, task126_1.iP, task126_1.iD, task126_1.k)
);