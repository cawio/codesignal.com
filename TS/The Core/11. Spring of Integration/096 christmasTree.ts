function christmasTree(levelNum: number, levelHeight: number): string[] {
    let christmasTree: string[] = [];
    let firstLineOfLevel: string = '*****';
    const maxWidth: number = 5 + (2 * (levelNum - 1)) + (2 * (levelHeight - 1));

    //treebody    
    for (let i = 0; i < levelNum; i++) {
        let line: string = firstLineOfLevel;
        let spaces: number = Math.floor(maxWidth / 2) - Math.floor(line.length / 2);
        console.log(spaces);
        for (let j = 0; j < levelHeight; j++) {
            christmasTree.push(line.padStart(spaces + line.length, ' '));
            console.table(christmasTree);
            line = line.concat('**');
            spaces--;

        }
        firstLineOfLevel = firstLineOfLevel.concat('**');   
    }
    
    //crown
    christmasTree.unshift('*'.padStart(Math.floor(maxWidth / 2) + 1, ' '), 
                          '*'.padStart(Math.floor(maxWidth / 2) + 1, ' '),
                          '***'.padStart(Math.floor(maxWidth / 2) + 2, ' '));
    console.table(christmasTree);

    //base
    let base: string[] = [];
    let even: number = 0;
    if (levelHeight % 2 === 0) {
        even = 1;
    }
    let baseLine: string = '*'.repeat(levelHeight + even);
    let baseSpaces: number = Math.floor(maxWidth / 2) - Math.floor(baseLine.length / 2)
    for (let i = 0; i < levelNum; i++) {
        base.push(baseLine.padStart(baseSpaces + baseLine.length, ' '))
    }
    
    christmasTree.push(...base);
     
    return christmasTree;
}

console.log(christmasTree(2, 4));