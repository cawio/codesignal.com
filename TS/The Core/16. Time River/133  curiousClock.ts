function curiousClock(someTime: string, leavingTime: string): string {
    const current: Date = new Date(someTime.replace(/-/g, '/'));
    const leave: Date = new Date(leavingTime.replace(/-/g, '/'));
    const adjusted: Date = new Date(current.getTime() - (leave.getTime() - current.getTime()));

    const adjusteDate: string = adjusted
        .getFullYear()
        .toString()
        .concat(
            '-',
            (adjusted
                .getMonth() + 1)
                .toString()
                .padStart(2, '0'),
            '-',
            adjusted
                .getDate()
                .toString()
                .padStart(2, '0')
        );

    const adjustedTime: string = adjusted
        .getHours()
        .toString()
        .padStart(2, '0')
        .concat(
            ':',
            adjusted
                .getMinutes()
                .toString()
                .padStart(2, '0')
        );
    
    return adjusteDate.concat(' ', adjustedTime);
}

console.log(curiousClock('2016-08-26 22:40', '2016-08-29 10:00'));