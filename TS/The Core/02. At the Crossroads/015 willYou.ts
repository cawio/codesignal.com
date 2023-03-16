function willYou(young: boolean, beautiful: boolean, loved: boolean): boolean {
    const contradictsMary1: boolean[] = [true, true, false];
    const contradictsMary4: boolean[] = [false, false, true];
    const contradictsMary2: boolean[] = [false, true, true];
    const contradictsMary3: boolean[] = [true, false, true];
    const thisPerson: boolean[] = [young, beautiful, loved];

    if (!thisPerson.every((elem, index) => elem == contradictsMary1[index]) && 
        !thisPerson.every((elem, index) => elem == contradictsMary2[index]) && 
        !thisPerson.every((elem, index) => elem == contradictsMary3[index]) && 
        !thisPerson.every((elem, index) => elem == contradictsMary4[index])) {
            return false;
        }

    return true;
}

interface Person {
    young: boolean,
    beautiful: boolean,
    loved: boolean,
    expectedResult: boolean
};
let person1: Person = {
    young:  true,
    beautiful: false,
    loved: true,
    expectedResult: true
};
let person2: Person = {
    young: true,
    beautiful: true,
    loved: true,
    expectedResult: false
};
let person3: Person = {
    young: false,
    beautiful: false,
    loved: false,
    expectedResult: false
};
let person4: Person = {
    young: false,
    beautiful: false,
    loved: true,
    expectedResult: true
};

console.log(willYou(person1.young, person1.beautiful, person1.loved), person1.expectedResult);
console.log(willYou(person2.young, person2.beautiful, person2.loved), person2.expectedResult);
console.log(willYou(person3.young, person3.beautiful, person3.loved), person3.expectedResult);
console.log(willYou(person4.young, person4.beautiful, person4.loved), person4.expectedResult);