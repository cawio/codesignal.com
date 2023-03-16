function electionWinners(votes: number[], k: number): number {
    let maxVote: number = Math.max(...votes)
    let result = votes.filter(elem => elem + k > maxVote).length;                   //all that added with k are still smaller or equal than maxVote dont qualify

    if (result > 0) return result;                                                  //if not all votes have been cast
        else if (votes.filter(elem => elem == maxVote).length > 1) return 0;        //if all votes have been cast and there is mulitple maxVotes
        else return 1;                                                              //if there is only one maxVote
}

let testVotes1: number[] = [2, 3, 5, 2];
let testK1: number = 3;

let testVotes2: number[] = [1, 3, 3, 1, 1];
let testK2: number = 0;

let testVotes3: number[] = [5, 1, 3, 4, 1];
let testK3: number = 0;

let testVotes4: number[] = [1, 1, 1, 1];
let testK4: number = 1;

console.log(electionWinners(testVotes1, testK1));
console.log(electionWinners(testVotes2, testK2));
console.log(electionWinners(testVotes3, testK3));
console.log(electionWinners(testVotes4, testK4));
