function volleyballPositions(formation: string[][], k: number): string[][] {
    // every 6 rounds the team is in the first round formation
    if (k === 0 || k % 6 === 0) {
        return formation;
    }
    k = k % 6;
         
    for (let i = 0; i < k; i++) {
        let temp: string = formation[2][1];
        formation[2][1] = formation[3][0];
        formation[3][0] = formation[1][0];
        formation[1][0] = formation[0][1];
        formation[0][1] = formation[1][2];
        formation[1][2] = formation[3][2];
        formation[3][2] = temp;
    }

    return formation;
}

console.log(volleyballPositions([["empty",   "Player5", "empty"],
                                 ["Player4", "empty",   "Player2"],
                                 ["empty",   "Player3", "empty"],
                                 ["Player6", "empty",   "Player1"]]
                                 , 2));