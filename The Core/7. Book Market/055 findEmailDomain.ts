function findEmailDomain2(address: string): string {
    let adressArr: string[] = address.split('');
    
    return adressArr.slice(adressArr.lastIndexOf('@') + 1).join('');
}