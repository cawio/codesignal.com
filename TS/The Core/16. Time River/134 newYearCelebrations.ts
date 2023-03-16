function newYearCelebrations(takeoffTime: string, minutes: number[]): number {
    // set takeoffTime for Date format
    if (takeoffTime === "00:00") {
        takeoffTime = "2023-01-01 " + takeoffTime;
    } else {
        takeoffTime = "2022-12-31 " + takeoffTime;
    }
    
    let celebrations: number = 0;
    let timePassed: number = 0;
    let date: Date = new Date(takeoffTime);
    let lastYear: number = date.getFullYear();
    
    minutes.forEach((m: number) => {
        m = m - timePassed; 
        if (date.getHours() === 0 && date.getMinutes() === 0) {
            celebrations++;
        }
        date.setMinutes(date.getMinutes() + m);
        if (lastYear < date.getFullYear()) {
            celebrations++;
        }
        date.setHours(date.getHours() - 1);
        lastYear = date.getFullYear();
        timePassed += m;

    });
    if (date.getFullYear() === 2022 || (date.getHours() === 0 && date.getMinutes() === 0)) {
        celebrations++;
    }

    return celebrations;
}

interface Task134 {
    tT: string;
    m: number[];
    expOut: number
}

const task134_1: Task134 = {
    tT: '23:35',
    m: [60, 90, 140],
    expOut: 3,
}
console.log(task134_1.expOut, newYearCelebrations(task134_1.tT, task134_1.m));

const task134_3: Task134 = {
    tT: '13:36',
    m: [23, 33, 45, 56, 66, 88],
    expOut: 1,
}
console.log(task134_3.expOut, newYearCelebrations(task134_3.tT, task134_3.m));

const task134_5: Task134 = {
    tT: '20:18',
    m: [222, 342],
    expOut: 3,
}
console.log(task134_5.expOut, newYearCelebrations(task134_5.tT, task134_5.m));