function companyBotStrategy(trainingData: number[][]): number {
    const correctAnswers: number[][] = trainingData.filter((subArray: number[]) => subArray[1] === 1)

    if (correctAnswers.length === 0) {
        return 0;
    }

    return correctAnswers.reduce((sum: number, subArray: number[]) => sum + subArray[0], 0) / correctAnswers.length
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]), 4.5);
console.log(companyBotStrategy([[4,-1], [0,0], [5,-1]]), 0);