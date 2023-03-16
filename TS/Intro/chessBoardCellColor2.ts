function chessBoardCellColor2(cell1: string, cell2: string): boolean {
    const rowWithBottomDark: string[] = ['A', 'C', 'E', 'G'];
    const lightColor: string = 'light';
    const darkColor: string = 'dark';

    //determine cell 1 color
    let cell1Color: string = '';
    if (rowWithBottomDark.includes(cell1[0])) {
        if (Number(cell1[1]) % 2 !== 0) {
            cell1Color = darkColor;
        }
        else {
            cell1Color = lightColor;
        }
    }
    else {
        if (Number(cell1[1]) % 2 == 0) {
            cell1Color = darkColor;
        }
        else {
            cell1Color = lightColor;
        }
    }

    //determine cell 2 color
    let cell2Color: string = '';
    if (rowWithBottomDark.includes(cell2[0])) {
        if (Number(cell2[1]) % 2 !== 0) {
            cell2Color = darkColor;
        }
        else {
            cell2Color = lightColor;
        }
    }
    else {
        if (Number(cell2[1]) % 2 == 0) {
            cell2Color = darkColor;
        }
        else {
            cell2Color = lightColor;
        }
    }

    return cell1Color == cell2Color;
}

let colorTest1: string = 'A7';
let colorTest2: string = 'B2';

console.log(chessBoardCellColor2(colorTest1, colorTest2));
