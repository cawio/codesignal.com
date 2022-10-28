function numberOfClans(divisors: number[], k: number): number {
    let clan: string[] = [];
    for (let i = 1; i <= k; i++) {
        let tempClan: number[] = [];
        for (let j = 0; j < divisors.length; j++) {
            if (i % divisors[j] == 0){
                tempClan.push(1);
            } else {
                tempClan.push(0);
            }
        }
        clan.push(tempClan.toString());
    }

    let clanSet: string[] = [];      
    for (let i = 0; i < clan.length; i++) {
        if (clanSet.includes(clan[i])) {
            continue;
        }
        clanSet.push(clan[i]);
    }
    
    return clanSet.length;
}

console.log(numberOfClans([2, 3], 6));