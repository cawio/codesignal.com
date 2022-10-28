function addBorder(picture: string[]): string[] {
    let str: string = '';

    //Add * to start and end of each string in array
    for (let i: number = 0; i < picture.length; i++ ) {
        str = picture.splice(i, 1).join();
        str = '*' + str + '*';
        picture.splice(i, 0, str);
    } 
    
    //Define top and bottom
    let top: string = '';
    for ( let i: number = 0; i < str.length; i++) {
        top += '*';
    }
    let bottom: string = top;

    //Add top and bottom to array
    picture.unshift(top);
    picture.push(bottom);

    return picture;
}