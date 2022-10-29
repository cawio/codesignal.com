function solution(noun: string): string {
    return noun.charAt(0).toUpperCase().concat(noun.substring(1).toLowerCase());
}