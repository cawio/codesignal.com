function htmlEndTag(startTag: string): string {
    // let tagName: string = '';
    // for (let i = 1; i < startTag.length; i++) {
    //     const currChar: string = startTag.charAt(i);
    //     if (currChar === ' ' || currChar === '>') {
    //         break;
    //     }
    //     tagName += currChar;
    // }

    // return "</" + tagName + ">";;
    
    const pattern: RegExp = /\w+/;

    return `</${startTag.match(pattern)}>`;
}

const htmlTag1: string = '<div>';
const htmlTag2: string = '<img source = "ok"';

console.log(htmlEndTag(htmlTag1));
console.log(htmlEndTag(htmlTag2));
