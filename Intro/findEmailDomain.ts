function findEmailDomain(address: string): string {
    let adressArr: string[] = address.split('');
    return adressArr.slice(adressArr.lastIndexOf('@') + 1).join('');
}

let findDomainTest1: string = 'prettyandsimple@example.com';
let findDomainTest2: string = 'fully-qualified-domain@codesignal.com';

console.log(findEmailDomain(findDomainTest1));
console.log(findEmailDomain(findDomainTest2));