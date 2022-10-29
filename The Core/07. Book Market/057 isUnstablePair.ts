function isUnstablePair(filename1: string, filename2: string): boolean {
    return filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase();
}

interface Task57 {
    f1: string;
    f2: string;
    expOut: boolean
};

const task57_Test1: Task57 = {f1: 'aa', f2: 'AAB', expOut: true};
const task57_Test2: Task57 = {f1: 'A', f2: 'z', expOut: false};

console.log('expOut', task57_Test1.expOut, 'myOut', isUnstablePair(task57_Test1.f1, task57_Test1.f2));
console.log('expOut', task57_Test2.expOut, 'myOut', isUnstablePair(task57_Test2.f1, task57_Test2.f2));