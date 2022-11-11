enum Step {
    Up = 1,
    Down,
    Right,
    Left
}

class Befunge93 {
    height: number = 0;
    width: number = 0;
    row: number = 0;
    col: number = 0;
    d: number = 3; // 1 = Up; 2 = Down; 3 = Right (default); 4 = Left
    output: string = '';
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

    get solution(): string {
        for (let i = 0; i < 10e5; i++) {
            let c: string = this.programm[this.row][this.col]; // command
            let a: number = 0;
            let b: number = 0;
            if (c == '^') {
                this.d = 1;
            } else if (c == 'v') {
                this.d = 2;
            } else if (c == '>') {
                this.d = 3;
            } else if (c == '<') {
                this.d = 4;
            } else if (c == '#') {
                // bridge; skip next cell
                this.step(this.d);
            } else if (c == '_') {
                // pop a value; move right if value = 0, left otherwise
                if (this.safePop() == 0) {
                    this.d = Step.Right;
                } else {
                    this.d = Step.Left;
                }
            } else if (c == '|') {
                // pop a value; move down if value = 0, up otherwise
                if (this.safePop() == 0) {
                    this.d = Step.Down;
                } else {
                    this.d = Step.Up;
                }
            } else if (c == '+') {
                // addition; pop a, pop b, then push a + b
                a = this.safePop();
                b = this.safePop();
                this.stack.push(a + b);
            } else if (c == '-') {
                // subtraction; pop a, pop b, then push b - a
                a = this.safePop();
                b = this.safePop();
                this.stack.push(b - a);
            } else if (c == '*') {
                // multiplication; pop a, pop b, then push a * b
                a = this.safePop();
                b = this.safePop();
                this.stack.push(a * b);
            } else if (c == '/') {
                // integer division; pop a, pop b, then push b / a
                a = this.safePop();
                b = this.safePop();
                this.stack.push(Math.trunc(b / a));
            }  else if (c == '%') {
                // modulo operation; pop a, pop b, then push b % a
                a = this.safePop();
                b = this.safePop();
                this.stack.push(b % a);
            } else if (c == '!') {
                // logical NOT; pop a value, if the value = 0, push 1, otherwise push 0
                a = this.safePop();
                if (a == 0) {
                    this.stack.push(1);
                } else {
                    this.stack.push(0);
                }
            }  else if (c == '`') {
                // greater than; pop a and b, then push 1 if b > a, otherwise 0
                a = this.safePop();
                b = this.safePop();
                if (b > a) {
                    this.stack.push(1);
                } else {
                    this.stack.push(0);
                }
            } else if (c == ':') {
                // duplicate value on top of the stack
                a = this.safePop();
                this.stack.push(a, a);
            } else if (c == '\\') {
                // swap the top stack value with the second to the top
                a = this.safePop();
                b = this.safePop();
                this.stack.push(a, b);
            } else if (c == '$') {
                // pop value from the stack and discard it
                this.safePop();
            } else if (c == '.') {
                // pop value and output it as an integer followed by a space
                this.output = this.output.concat(String(this.safePop()), ' ');
            } else if (c == ',') {
                // pop value and this.output it as ASCII character
                a = this.safePop();
                this.output = this.output.concat(String.fromCharCode(a));
            } else if ('0123456789'.indexOf(c) != -1) {
                // push the encountered number on the stack
                this.stack.push(Number(c));
            } else if (c == '"') {
                // start string mode; push each character's ASCII value all the way up to the next "
                this.step(this.d);
                c = this.programm[this.row][this.col];
                while (c != '"' ) {
                    this.stack.push(c.charCodeAt(0));
                    this.step(this.d);
                    c = this.programm[this.row][this.col];
                }
            } else if (c == ' ') {
                // empty instruction; does nothing
            } else if (c == '@') {
                // end program; the program output should be returned then
                break;
            }

            if ( this.output.length > 99) {
                break;
            }

            this.step(this.d);
        }

        return this.output;
    }

    public try(): string {
            const testPassed: boolean = this.expOut === this.solution;
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