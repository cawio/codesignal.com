function adaNumber(line: string): boolean {
    line = line.toLowerCase().replace(/_/g, "");
    
    if (line.length === 0) {
        return false;
    } else if (checkValidBaseNumber(10, line)) {
        return true;
    } else if (checkBasedInteger(line)) {
        return true;
    } else {
        return false;
    }
} 

function checkBasedInteger(str: string): boolean {
    const parts = str.split("#");
    
    // not 3 parts
    if (parts.length !== 3) {
        return false;
    }

    if (parts[0].length === 0 || parts[1].length === 0) {
        return false;
    }

    if (parts[2] !== "") {
        return false;
    }
    
    if (!checkValidBaseNumber(10, parts[0])) {
        return false;
    }
    
    const base = parseInt(parts[0], 10);
    if (base < 2 || base > 16) {
        return false;
    }
    
    if (!checkValidBaseNumber(base, parts[1])) {
        return false;
    }

    return true;
}

function checkValidBaseNumber(base: number, value: string): boolean {
   
    const abc = "0123456789abcdef";
    const baseNumbers = abc.substring(0, base).split("");
    
    for (let i = 0; i < value.length; i++) {
        if (!baseNumbers.includes(value[i])) {
            return false;
        }
    }
    
    return true;
}

console.log(adaNumber('123_456_789'));