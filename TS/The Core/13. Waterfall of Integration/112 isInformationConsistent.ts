function isInformationConsistent(evidences: number[][]): boolean {
    // create columns
    let votes: number[][] = [];
    for (let i = 0; i < evidences[0].length; i++) {
        let vote: number[] = [];
        for (let j = 0; j < evidences.length; j++) {
            console.log(j, i)
            vote.push(evidences[j][i]);
        }
        votes.push(vote)
    }
    
    // check if verdict is unanimous i.e only 0 and 1 or -1 and 0
    for (let i = 0; i < votes.length; i++) {
        const el: number[] = votes[i];
        if (el.includes(1) && el.includes(-1)) {
            return false;
        }
    }

    return true;
}

console.log(isInformationConsistent([[ 0, 1, 0, 1], 
                                     [-1, 1, 0, 0],
                                     [-1, 0, 0, 1]]));