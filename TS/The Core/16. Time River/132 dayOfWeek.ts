function dayOfWeek(birthdayDate: string): number {
    let month: number = parseInt(birthdayDate.substring(0,2)) - 1;
    let day: number = parseInt(birthdayDate.substring(3,5));
    let year: number = parseInt(birthdayDate.substring(6,10));    
    let onBDayDate: Date = new Date(year, month, day);
    let bdayDayOfWeek: number = onBDayDate.getDay();
    let isLeap: boolean = false;
    
    if((month === 1) && (day === 29)) {
        isLeap = true;
    }

    let yearCount: number = 0;
    while(true) {
        yearCount++;
        year++;
        let d: Date = new Date(year, month, day);

        if(isLeap) {
            let b = (year % 4 === 0) && (year % 100 !== 0)
            if(!b) {
                continue;
            }
        }

        if(bdayDayOfWeek === d.getDay()) {
            break;
        }
    }

    return yearCount;
}
