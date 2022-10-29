function electionWinners2(votes: number[], k: number): number {
    let maxVote: number = Math.max(...votes)
    let result = votes.filter(elem => elem + k > maxVote).length;                   //all that added with k are still smaller or equal than maxVote dont qualify

    if (result > 0) {
            return result;
        } else if (votes.filter(elem => elem == maxVote).length > 1) {              //if not all votes have been cast
            return 0;                                                               //if all votes have been cast and there is mulitple maxVotes
        } else {
            return 1;                                                               //if there is only one maxVote
        }
}