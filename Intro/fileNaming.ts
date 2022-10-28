/* 
You are given an array of desired filenames in the order of their creation. 
Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), 
where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.
*/

function fileNaming(names: string[]): string[] {
    let i: number = 1;
    let noDuplicateNames: string[] = [];

    names.forEach((filename, index, array) => {
        if(!noDuplicateNames.includes(filename)) {
            noDuplicateNames.push(filename);
        }
        else {
            while (noDuplicateNames.includes(array[index] + `(${i})`)) {
                i++;
            }
            noDuplicateNames.push(array[index] += `(${i})`);
        }
        i = 1;
    });

    return noDuplicateNames;
}

let testNames1: string[] = ["doc", "doc", "image", "doc(1)", "doc"];

console.log(fileNaming(testNames1));
console.log('test' + '(1)');
console.log(['doc(1)'].includes('doc'));