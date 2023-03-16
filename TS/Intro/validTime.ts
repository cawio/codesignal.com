function validTime(time: string): boolean {
    return (/([(0|1][\d]:[0-5][\d])|(2[0-3]:)[0-5][\d]/).test(time)
}