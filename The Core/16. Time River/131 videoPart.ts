function videoPart(part: string, total: string): number[] {
    let nPart = part.split(":").map((el: string) => Number(el));
    let nTotal = total.split(":").map((el: string) => Number(el));
    let partSecs = nPart[0] * 3600 + nPart[1] * 60 + nPart[2];
    let totalSecs = nTotal[0] * 3600 + nTotal[1] * 60 + nTotal[2];
    let mcd = gcd(partSecs, totalSecs);
    
    return [partSecs / mcd, totalSecs / mcd];
}
  
function gcd(a: number, b: number) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
}