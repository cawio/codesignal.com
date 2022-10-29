function tennisSet(score1: number, score2: number): boolean {
    // if(score1 == 7 && score2 != 7 && score2 > 4) {
    //     return true;
    // } else if (score1 != 7 && score2 == 7 && score1 > 4) {
    //     return true;
    // }

    // if(score1 == 6 && (score1 - score2) > 1) {
    //     return true;
    // } else if (score2 == 6 && (score2 - score1) > 1) {
    //     return true; 
    // }

    // return false;

    let higherScore = Math.max(score1, score2);
	let lowerScore = Math.min(score1, score2);
	return higherScore == 6 && lowerScore < 5 || higherScore == 7 && lowerScore > 4 && lowerScore < 7;
}


let testScore11: number = 3;
let testScore12: number = 6;

console.log(tennisSet(testScore11, testScore12));