function replaceAllDigitsRegExp(input: string): string {
    return input.replace(/\d/g, '#');
}

console.log(replaceAllDigitsRegExp('There are 12 points'), 'There are ## points' );