function swapAdjacentWords(s: string): string {
    return s.replace(/(\w+) (\w+)/g, '$2 $1');
}

console.log(
    swapAdjacentWords('CodeFight On'),
    'On CodeFight'
);