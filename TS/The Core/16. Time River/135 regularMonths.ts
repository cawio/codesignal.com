function regularMonths(currMonth: string): string {
    // format
    // year/month/day hours:minutes
    const year: string = currMonth.substring(3);
    const month: string = currMonth.substring(0, 2);
    const dateString: string = year + '-' + month + '-01 12:00';
    dateString
    let date: Date = new Date(dateString);
    let found = false;
    let nextRegularMonth: number = 0;
    let nextRegularYear: number = 0;
    while(!found) {
        date.setMonth(date.getMonth() + 1);
        
        if (date.getDay() === 1) {
            console.log(date)
            nextRegularMonth = date.getMonth() + 1;
            nextRegularYear = date.getFullYear();
            found = true;
        }
    }

    return String(nextRegularMonth).padStart(2, '0').concat('-', String(nextRegularYear));
}

console.log(regularMonths('02-2016'))