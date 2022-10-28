function variableName(name: string): boolean {
    //Check if first place in string is letter/underscore and the rest is alphanumeric/underscore
    return /^[A-Za-z_][A-Za-z0-9_]*$/g.test(name);
}

let variableNameTest1: string = "var_1__Int";
let variableNameTest2: string = "qq-q";
let variableNameTest3: string = "2w2";
let variableNameTest4: string = " variable";
let variableNameTest5: string = "va[riable0";
let variableNameTest6: string = "variable0";
let variableNameTest7: string = "a";
let variableNameTest8: string = "_Aas_23";
let variableNameTest9: string = "a a_2";
let variableNameTest10: string = "0ss";

console.log(variableName(variableNameTest9));
