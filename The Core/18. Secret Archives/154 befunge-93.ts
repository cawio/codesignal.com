class Befunge93 {
    constructor (
        private id: number,
        private programm: string[],
        private expOut: string
    ) {}

    public solution(): string {
        const height: number = this.programm.length;
        const width: number = this.programm[0].length;
        let row: number = 0;
        let col: number = 0;
        let d: number = 3; // 1 = Up; 2 = Down; 3 = Right (default); 4 = Left
        
        const stepUp    = () => row = row - 1 < 0 ? height - 1 : row - 1; 
        const stepDown  = () => row = row + 1 == height ? 0 :  row + 1;
        const stepRight = () => col = col + 1 == width ? 0 : col + 1;
        const stepLeft  = () => col = col - 1 < 0 ? width - 1 : col - 1;
        
        enum Step {
            Up = 1,
            Down,
            Right,
            Left
        }

        const step = (d: number): void => {
            if (d == Step.Up) {
                stepUp();
            } else if (d == Step.Down) {
                stepDown();
            } else if (d == Step.Right) {
                stepRight();
            } else {
                stepLeft();
            }
        }
        
        let stack: number[] = [];
        const safePop = (): number => {
            let n = stack.pop();
            if (n == undefined) {
                n = 0;
            }
            
            return n;
        }

        let output: string = '';
        for (let i = 0; i < 10e5; i++) {
            let c: string = this.programm[row][col];   
            let a: number = 0;
            let b: number = 0;      
            if (c == '^') {
                d = 1;
            } else if (c == 'v') {
                d = 2;
            } else if (c == '>') {
                d = 3;
            } else if (c == '<') {
                d = 4;
            } else if (c == '#') {
                // bridge; skip next cell
                step(d);
            } else if (c == '_') {
                // pop a value; move right if value = 0, left otherwise
                if (safePop() == 0) {
                    d = Step.Right;
                } else {
                    d = Step.Left;
                }
            } else if (c == '|') {
                // pop a value; move down if value = 0, up otherwise
                if (safePop() == 0) {
                    d = Step.Down;
                    d = Step.Up;
                } else {
                }
            } else if (c == '+') {
                // addition; pop a, pop b, then push a + b
                a = safePop();
                b = safePop();
                stack.push(a + b);
            } else if (c == '-') {
                // subtraction; pop a, pop b, then push b - a
                a = safePop();
                b = safePop();
                stack.push(b - a);
            } else if (c == '*') {
                // multiplication; pop a, pop b, then push a * b
                a = safePop();
                b = safePop();
                stack.push(a * b);
            } else if (c == '/') {
                // integer division; pop a, pop b, then push b / a
                a = safePop();
                b = safePop();
                stack.push(Math.trunc(b / a));
            }  else if (c == '%') {
                // modulo operation; pop a, pop b, then push b % a
                a = safePop();
                b = safePop();
                stack.push(b % a);
            } else if (c == '!') {
                // logical NOT; pop a value, if the value = 0, push 1, otherwise push 0
                a = safePop();
                if (a == 0) {
                    stack.push(1);
                } else {
                    stack.push(0);
                }
            }  else if (c == '`') {
                // greater than; pop a and b, then push 1 if b > a, otherwise 0
                a = safePop();
                b = safePop();
                if (b > a) {
                    stack.push(1);
                } else {
                    stack.push(0);
                }
            } else if (c == ':') {
                // duplicate value on top of the stack
                a = safePop();
                stack.push(a, a);
            } else if (c == '\\') {
                // swap the top stack value with the second to the top
                a = safePop();
                b = safePop();
                stack.push(a, b);
            } else if (c == '$') {
                // pop value from the stack and discard it
                safePop();
            } else if (c == '.') {
                // pop value and output it as an integer followed by a space
                output = output.concat(String(safePop()), ' ');
            } else if (c == ',') {
                // pop value and output it as ASCII character
                a = safePop();
                output = output.concat(String.fromCharCode(a));
            } else if ('0123456789'.indexOf(c) != -1) {
                // push the encountered number on the stack
                stack.push(Number(c));
            } else if (c == '"') {
                // start string mode; push each character's ASCII value all the way up to the next "
                step(d);
                c = this.programm[row][col];
                while (c != '"' ) {
                    stack.push(c.charCodeAt(0));
                    step(d);
                    c = this.programm[row][col];
                }
            } else if (c == ' ') {
                // empty instruction; does nothing
            } else if (c == '@') {
                // end program; the program output should be returned then
                break;
            }

            if ( output.length > 99) {
                break;
            }

            step(d);
        }

        return output;
    }
    
    public try(): string {
            const testPassed: boolean = this.expOut === this.solution();
        return `Test ${String(this.id).padStart(2, '0')}: ${testPassed ? 'passed 😊' : 'failed 😣'}`;
    }
}

let task154Tests: Befunge93[] = [
    new Befunge93(
        1, 
        ["               v", 
         "v  ,,,,,\"Hello\"<",
         ">48*,          v",
         "\"!dlroW\",,,,,,v>",
         "25*,@         > "],
        "Hello World!\n"
    ),
    new Befunge93(
        2, 
        [">25*\"!dlrow ,olleH\":v ", 
         "                 v:,_@", 
         "                 >  ^ "],
        "Hello, world!\n"
    ),
    new Befunge93(
        3, 
        ["1+:::*.9`#@_"],
        "1 4 9 16 25 36 49 64 81 100 "
    ),
    new Befunge93(
        4, 
        ["\"^a&EPm=kY}t/qYC+i9wHye$m N@~x+\"v", 
         "\"|DsY<\"-\"z6n<[Yo2x|UP5VD:\">:#v_@>", 
         "-:19+/\"0\"+,19+%\"0\"+,      ^  >39*"],
        "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067"
    ),
    new Befunge93(
        10, 
        ["92+9*                           :. v  <      ", 
         ">v\"bottles of beer on the wall\"+910<         ", 
         ",:                                           ", 
         "^_ $                             :.v         ", 
         "            >v\"bottles of beer\"+910<         ", 
         "            ,:                               ", 
         "            ^_ $                     v       ", 
         ">v\"Take one down, pass it around\"+910<       ", 
         ",:                                           ", 
         "^_ $                           1-v           ", 
         "                                 :           ", 
         "        >v\"bottles of beer\"+910.:_          v", 
         "        ,:                                   ", 
         "        ^_ $                          ^      ", 
         "                    >v\" no more beer...\"+910<", 
         "                    ,:                       ", 
         "                    ^_ $$ @                  "],
        "99 bottles of beer on the wall\n99 bottles of beer\nTake one down, pass it around\n98 bottles of beer\nb"
    ),
    new Befunge93(
        13, 
        ["vv    <>v *<", 
         "9>:1-:|$>\\:|", 
         ">^    >^@.$<"],
        "362880 "
    ),
];
task154Tests.forEach((el: Befunge93) => console.log(el.try()));