function bigTestFunction(){

    for (var x = 0; x < 8; x++){
        for (var y = 0; y < 8; y++){
            //var expected = true;
            //var value1 = "A"+y;
            
            var value1 = String.fromCharCode(65 /* + x */) + (/* y  +*/ 1);
            for (let z = 0; z < 8; z++) {
                var value2 = String.fromCharCode(65 + y) + (z + 1);
                console.log('result: ', chessBoardCellColor(value1, value2), ' with values ', value1, value2);


                /* if (chessBoardCellColor(value1, value2) != expected){
                    console.log('found error with functions ', value1, value2, expected);
                } */
            }
        }
    }

}

function chessBoardCellColor(cell1: string, cell2: string): boolean {
    //if compared cells are in the same column
    if (cell1[0] == cell2[0] && Math.abs(Number(cell1[1]) - Number(cell2[1])) % 2 == 0) {
        return true;
    }

    //if compared cells are in the same row
    if (cell1[1] == cell2[1] && Math.abs(cell1.charCodeAt(0) - cell2.charCodeAt(0)) % 2 == 0) {
        return true;
    }

    //otherwise check if x and y positions on the board are equal
    return Math.abs(cell1.charCodeAt(0) - cell2.charCodeAt(0)) == Math.abs(Number(cell1[1]) - Number(cell2[1]));
}

let chessBoardCellColorTest11: string = 'H8';
let chessBoardCellColorTest12: string = 'H8';

/* console.log( Math.abs( chessBoardCellColorTest11.charCodeAt(0) - chessBoardCellColorTest12.charCodeAt(0)) + 1 );
console.log( Math.abs( Number(chessBoardCellColorTest11[1]) - Number(chessBoardCellColorTest12[1])) + 1 ); */

//console.log(chessBoardCellColor(chessBoardCellColorTest11, chessBoardCellColorTest12));
console.log(bigTestFunction());
