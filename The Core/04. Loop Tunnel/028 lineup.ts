function lineup(commands: string): number {
    let groupOne: string = 'D'; //D = default == facing teacher
    let groupTwo: string = 'D';
    for (let i = 0; i < commands.length; i++) {
        let currCommand: string = commands.charAt(i);

        //students without left/right disorder
        let groupOnePrevious: string = groupOne.charAt(groupOne.length - 1);
        if(currCommand == 'L') {
            if (groupOnePrevious == 'D') {
                groupOne += 'L';
            } else if (groupOnePrevious == 'L') {
                groupOne += 'A';
            } else if (groupOnePrevious == 'A') {
                groupOne += 'R';
            } else {
                groupOne += 'D';
            }
        } else if (currCommand == 'R') {
            if (groupOnePrevious == 'D') {
                groupOne += 'R';
            } else if (groupOnePrevious == 'L') {
                groupOne += 'D';
            } else if (groupOnePrevious == 'A') {
                groupOne += 'L';
            } else {
                groupOne += 'A';
            }
        } else {
            if (groupOnePrevious == 'D') {
                groupOne += 'A';
            } else if (groupOnePrevious == 'L') {
                groupOne += 'R';
            } else if (groupOnePrevious == 'A') {
                groupOne += 'D';
            } else {
                groupOne += 'L';
            }
        }

        //studens with left/right disorder
        let groupTwoPrevious: string = groupTwo.charAt(groupTwo.length - 1);
        if(currCommand == 'L') {
            if (groupTwoPrevious == 'D') {
                groupTwo += 'R';
            } else if (groupTwoPrevious == 'L') {
                groupTwo += 'D';
            } else if (groupTwoPrevious == 'A') {
                groupTwo += 'L';
            } else {
                groupTwo += 'A';
            }
        } else if (currCommand == 'R') {
            if (groupTwoPrevious == 'D') {
                groupTwo += 'L';
            } else if (groupTwoPrevious == 'L') {
                groupTwo += 'A';
            } else if (groupTwoPrevious == 'A') {
                groupTwo += 'R';
            } else {
                groupTwo += 'D';
            }
        } else {
            if (groupTwoPrevious == 'D') {
                groupTwo += 'A';
            } else if (groupTwoPrevious == 'L') {
                groupTwo += 'R';
            } else if (groupTwoPrevious == 'A') {
                groupTwo += 'D';
            } else {
                groupTwo += 'L';
            }
        }
    }
    console.log(commands.length, groupOne.length, groupTwo.length);
    let result: number = -1;
    groupOne.split('').forEach((element, i) => {
        if (element == groupTwo.charAt(i)) {
            result++;
        }
    });

    return result;
}

const task28_test1: string = 'LLARL';
const task28_test2: string = 'AALAAALARAR';

console.log(lineup(task28_test1));
console.log(lineup(task28_test2));