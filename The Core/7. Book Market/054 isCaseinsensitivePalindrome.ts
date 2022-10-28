function isCaseinsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();
    const reversed = inputString.split('').reverse().join('');

    return inputString == reversed;
}