function sortByLength(inputArray: string[]): string[] {
    return inputArray.sort((a: string, b: string) => {
        const c: number = a.length;
        const d: number = b.length;
            
        return c - d;
        });
}