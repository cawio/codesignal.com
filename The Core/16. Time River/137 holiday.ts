function holiday(x: number, weekDay: string, month: string, yearNumber: number): number {
    /*
        holiday is on xth week of month on weekday
    */

    const dayArray: string[] = [
        'Sunday', 
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'];
            
    const monthArray: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'];
            
    weekDay = String(dayArray.indexOf(weekDay)).padStart(2, '0');
    month = String(monthArray.indexOf(month) + 1).padStart(2, '0');
    const dateString: string = String(yearNumber)+'/'+month+'/1 12:00';
    const date: Date = new Date(dateString);
    
    while(date.getMonth() === Number(month) -1) {
        const weekNumber: number = getWeekNo(date);
        console.log(date, weekNumber);
        if (getWeekNo(date) === x && date.getDay() === Number(weekDay)) {
            return date.getDate();
        }
        date.setDate(date.getDate() + 1)
    }
    
    return -1;
}
    
// https://stackoverflow.com/questions/5974798/how-to-find-week-of-month-for-calendar-which-starts-from-monday
function getWeekNo(date: Date): number {
    let day: number = date.getDate();
    //get weekend date
    day += (date.getDay() == 0 ? 0 : 7 - date.getDay());
  
    return Math.ceil(day / 7);
}

// console.log(16, holiday(3, 'Wednesday', 'November', 2016));
console.log(20, holiday(3, 'Thursday', 'January', 2101));