function lateRide(n: number): number {
    const minutes: number = n % 60;
    const hours: number = Math.floor(n / 60)
    const time: string[] = (hours.toString() + minutes.toString()).split('');
    let sum: number = 0;
    time.forEach(elem => {
        sum += Number(elem);
    });
    
    return sum;    
}

function lateRide2(n: number): number {
    const minutes: number = n % 60;
    const hours: number = Math.floor(n / 60)
    const time: number = (hours.toString() + minutes.toString()).split('').reduce((sum: number, elem: string) => sum += Number(elem), 0);
    
    return time;    
}

let testMinutes: number = 808;
console.log(lateRide2(testMinutes));