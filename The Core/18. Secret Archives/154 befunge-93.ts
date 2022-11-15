enum Step {
    Up = 1,
    Down,
    Right,
    Left
}

class Befunge93 {
    height = 0;
    width = 0;
    row = 0;
    col = 0;

    output = '';
    stack: number[] = [];

    constructor (
        private id: number,
        private programm: string[],
        private expOut: string
    ) {
        this.height = this.programm.length;
        this.width = this.programm[0].length;
    }

    private stepUp() {
        this.row = this.row - 1 < 0 ? this.height - 1 : this.row - 1;
    }

    private stepDown() {
        this.row = this.row + 1 == this.height ? 0 :  this.row + 1;
    }

    private stepRight() {
        this.col = this.col + 1 == this.width ? 0 : this.col + 1;
    }

    private stepLeft() {
        this.col = this.col - 1 < 0 ? this.width - 1 : this.col - 1;
    }

    private step(d: number): void {
        if (d == Step.Up) {
            this.stepUp();
        } else if (d == Step.Down) {
            this.stepDown();
        } else if (d == Step.Right) {
            this.stepRight();
        } else {
            this.stepLeft();
        }
    }

    private safePop(): number {
        let n: number | undefined = this.stack.pop();
        if (n == undefined) {
            n = 0;
        }

        return n;
    }

    runProgram(): string {
        let d = Step.Right; // 1 = Up; 2 = Down; 3 = Right (default); 4 = Left
        let stopProgram = false;
        for (let i = 0; i < 10e5; i++) {
            let c = this.programm[this.row][this.col]; // command
            let a = 0;
            let b = 0;
            switch(c) {
                case '^':
                    // change direction: step up
                    d = Step.Up;
                    break;
                case 'v':
                    // change direction: step down
                    d = Step.Down;
                    break;
                case '>':
                    // change direction: step right
                    d = Step.Right;
                    break;
                case '<':
                    // change direction: step left
                    d = Step.Left;
                    break;
                case '#':
                    // bridge; skip next cell
                    this.step(d);
                    break;
                case '_':
                    // pop a value; move right if value = 0, left otherwise
                    if (this.safePop() == 0) {
                        d = Step.Right;
                    } else {
                        d = Step.Left;
                    }
                    break;
                case '|':
                    // pop a value; move down if value = 0, up otherwise
                    if (this.safePop() == 0) {
                        d = Step.Down;
                    } else {
                        d = Step.Up;
                    }
                    break;
                case '+':
                    // addition; pop a, pop b, then push a + b
                    a = this.safePop();
                    b = this.safePop();
                    this.stack.push(a + b);
                    break;
                case '-':
                    // subtraction; pop a, pop b, then push b - a
                    a = this.safePop();
                    b = this.safePop();
                    this.stack.push(b - a);
                    break;
                case '*':
                    // multiplication; pop a, pop b, then push a * b
                    a = this.safePop();
                    b = this.safePop();
                    this.stack.push(a * b);
                    break;
                case '/':
                    // integer division; pop a, pop b, then push b / a
                    a = this.safePop();
                    b = this.safePop();
                    this.stack.push(Math.trunc(b / a));
                    break;
                case '%':
                    // modulo operation; pop a, pop b, then push b % a
                    a = this.safePop();
                    b = this.safePop();
                    this.stack.push(b % a);
                    break;
                case '!':
                    // logical NOT; pop a value, if the value = 0, push 1, otherwise push 0
                    a = this.safePop();
                    if (a == 0) {
                        this.stack.push(1);
                    } else {
                        this.stack.push(0);
                    }
                    break;
                case '`':
                    // greater than; pop a and b, then push 1 if b > a, otherwise 0
                    a = this.safePop();
                    b = this.safePop();
                    if (b > a) {
                        this.stack.push(1);
                    } else {
                        this.stack.push(0);
                    }
                    break;
                case ':':
                    // duplicate value on top of the stack
                    a = this.safePop();
                    this.stack.push(a, a);
                    break;
                case '\\':
                    // swap the top stack value with the second to the top
                    a = this.safePop();
                    b = this.safePop();
                    this.stack.push(a, b);
                    break;
                case '$':
                    // pop value from the stack and discard it
                    this.safePop();
                    break;
                case '.':
                    // pop value and output it as an integer followed by a space
                    this.output = this.output.concat(String(this.safePop()), ' ');
                    break;
                case ',':
                    // pop value and this.output it as ASCII character
                    a = this.safePop();
                    this.output = this.output.concat(String.fromCharCode(a));
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    // push the encountered number on the stack
                    this.stack.push(Number(c));
                    break;
                case '"':
                    // start string mode; push each character's ASCII value all the way up to the next "
                    this.step(d);
                    c = this.programm[this.row][this.col];
                    while (c != '"' ) {
                        this.stack.push(c.charCodeAt(0));
                        this.step(d);
                        c = this.programm[this.row][this.col];
                    }
                    break;
                case ' ':
                    // empty instruction; does nothing
                    break;
                case '@':
                    // end program; the program output should be returned then
                    stopProgram = true;
                    break;
                default:
                    throw new Error('Error: command not included in Interpretor')
            }

            if (this.output.length > 99 || stopProgram) {
                break;
            }

            this.step(d);
        }

        return this.output;
    }

    public try(): string {
            const testPassed: boolean = this.expOut === this.runProgram();
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