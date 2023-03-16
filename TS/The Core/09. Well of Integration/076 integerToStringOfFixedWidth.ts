function integerToStringOfFixedWidth(number: number, width: number): string {
    let nString: string = number.toString();
    if (nString.length === width) {
        //is already of correct length
        return nString;
    } else if (nString.length > width) {
        //needs to be shortened
        return nString.substring(nString.length - width);
    } else {
        //needs to be padded
        return nString.padStart(width, '0');
    }

}

console.log(integerToStringOfFixedWidth(23456, 4));