function gravitation(rows: string[]): number[] {
    // transform to columns
    let result: number[] = [];
    let onlyDotsString: string = ''.padEnd(rows.length, '.');

    let columns: string[] = [];
    for (let i = 0; i < rows[0].length; i++) {  // column
        let tmpCol: string = '';
        for (let j = 0; j < rows.length; j++) { // row
            tmpCol += rows[j].charAt(i);
        }
        columns.push(tmpCol);
        console.log(onlyDotsString, tmpCol);
        if (tmpCol === onlyDotsString) {
            result.push(i);
        }
    }
    columns = columns.map((el: string) => el.substring(el.indexOf('#')));

    // count dots
    let dotCount: number[] = columns.map((el: string) => {
        let c: number = 0;
        for (let i = 0; i < el.length; i++) {
            if(el.charAt(i) === '.') {
                c++;
            }
        }
        return c;
    });

    // calculate fastest to motionless
    let fastestMotionless: number = 0;
    if (result.length === 0) {
        fastestMotionless = Math.min(...dotCount);
    }

    // add all i where el === fastestMotionless
    dotCount.forEach((el: number, i: number) => {
        if (el === fastestMotionless) {
            result.push(i);
        }
    });

    return result.sort();
}

const task111_1: string[] = ["#..#.",
                             ".##..",
                             ".#...",
                             ".#..."];
            
const task111_2: string[] = ["#..#.##",
                             ".##...#", 
                             ".#.....", 
                             ".#....."];

console.log(gravitation(task111_1));
console.log(gravitation(task111_2));