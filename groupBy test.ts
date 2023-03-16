interface Note {
    title: string,
    priority: number,
}

interface GroupedNotes {
    [key: string]: Note[]
}

let notes: Note[] = [
    {title: 'test1', priority: 0},
    {title: 'test2', priority: 2},
    {title: 'test1', priority: 0},
    {title: 'test4', priority: 3},
    {title: 'test5', priority: 1},
];

function groupNotesBy(by: keyof Note, notes: Note[]) {
    return notes.reduce((acc: GroupedNotes, note: Note) => {
        const key = note[by as keyof Note];
        acc[key] = acc[key] || [];
        acc[key].push(note);
        return acc;
    }, {} as GroupedNotes);
}

function groupBy<K, V>(array: V[], grouper: (item: V) => K): Map<K, V[]> {
    return array.reduce((store, item) => {
        let key = grouper(item);
        console.log(`key: ${key}, item: ${item}, store: ${store}`);
        if (store.has(key)) {
            store.get(key)?.push(item);
        } else {
            store.set(key, [item]);
        }
        return store;
    }, new Map<K, V[]>());
}

let groupedNotes = groupBy(notes, (note) => note.priority);
for (let [key, notes] of groupedNotes) {
    console.log(key);
    for (let note of notes) {
        console.log(note);
    }
}

let test = {
    a: 1,
}

console.log(test['a'])


let isThere = JSON.stringify({title: 'test1', priority: 0}) == JSON.stringify({title: 'test1', priority: 0});
console.log(isThere);