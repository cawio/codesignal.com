function missedClasses(year: number, daysOfTheWeek: number[], holidays: string[]): number {
    let missed: number = 0;
    daysOfTheWeek = daysOfTheWeek.map((classDay: number) => classDay === 7 ? 0 : classDay);
    holidays.forEach((holiday: string) => {
        const month: number = Number(holiday.substring(0, 2));
        const day: string = holiday.substring(3);
        let schoolYear: number = year;
        if (month < 9) {
            schoolYear++
        }
        let dateString: string = String(schoolYear).concat(
            '/',
            String(month).padStart(2, '0'),
            '/',
            day,
            ' 12:00'
        )
        const date: Date = new Date(dateString);
        if (daysOfTheWeek.some((classDay: number) => classDay === date.getDay())) {
            missed++;
        }
    });

    return missed;
}

console.log(missedClasses(
    2015,
    [2, 3],
    ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"]
));
