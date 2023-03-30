type ClockFace = string[][];

interface Coordinates { x: number; y: number; };

interface timeASCIIRepresentationTest {
  input: ClockFace;
  expected: ClockFace;
}

class timeASCIIRepresentation {
  private readonly hourSeperation = 360 / 12;
  private readonly minuteSeperation = 360 / 60;
  private readonly tolerance = Math.sqrt(0.5); // max dist for a pixel to be considered as part of a segment or clock border
  private hourAngle: number;
  private minuteAngle: number;
  private digit0: string = '';
  private digit1: string = '';
  private digit2: string = '';
  private digit3: string = '';
  private analogClockFace: ClockFace;
  private readonly clockCenter: Coordinates = { x: 8, y: 8 };

  constructor(digitalTime: ClockFace) {
    // read the digits from the clock face
    this.digit0 = this.readDigitFromClockFace(digitalTime.map(row => row.slice(0, 4)));   // digit 0 is  0 -  3
    this.digit1 = this.readDigitFromClockFace(digitalTime.map(row => row.slice(4, 8)));   // digit 1 is  4 -  7
    this.digit2 = this.readDigitFromClockFace(digitalTime.map(row => row.slice(9, 13)));  // digit 2 is  9 - 12
    this.digit3 = this.readDigitFromClockFace(digitalTime.map(row => row.slice(13)));     // digit 3 is 13 - 16

    // calculate the hour angle 360 / 12 * HH + 30 / 60 * MM
    this.hourAngle = this.hourSeperation * Number(this.digit0 + this.digit1) + this.hourSeperation / 60 * Number(this.digit2 + this.digit3);
    // calculate the minute angle 30 / 60 * MM
    this.minuteAngle = this.minuteSeperation * Number(this.digit2 + this.digit3);

    // create the analog clock face
    this.analogClockFace = this.initClockFace();
    this.analogClockFace = this.drawClockBorder(this.analogClockFace);
    this.analogClockFace = this.drawClockHands(this.analogClockFace);
  }

  public getAnalogTime(): ClockFace {
    return this.analogClockFace;
  }

  private readDigitFromClockFace(digitalDigit: string[][]): string {
    // treat the digit as a 7 segment display
    // the segments are:
    //  +--A--+
    //  |     |
    //  F     B
    //  |     |
    //  +--G--+
    //  |     |
    //  E     C
    //  |     |
    //  +--D--+
    // depending on the segments, return the digit

    // digitalDigit array is 17 x 4 (17 rows, 4 columns)
    // col 0 is always empty, col 1 is left , col 2 is middle , col 3 is right

    const segmentA: boolean = digitalDigit[ 0][2] === '*';  // top
    const segmentB: boolean = digitalDigit[ 4][3] === '*';  // top right
    const segmentC: boolean = digitalDigit[12][3] === '*';  // bottom right
    const segmentD: boolean = digitalDigit[16][2] === '*';  // bottom
    const segmentE: boolean = digitalDigit[12][1] === '*';  // bottom left
    const segmentF: boolean = digitalDigit[ 4][1] === '*';  // top left
    const segmentG: boolean = digitalDigit[ 8][2] === '*';  // middle

    if (segmentA && segmentB && segmentC && segmentD && segmentE && segmentF && !segmentG) {
      return '0';
    } else if (segmentA && !segmentB && !segmentC && segmentD && !segmentE && !segmentF && segmentG) {
      return '1';
    } else if (segmentA && segmentB && !segmentC && segmentD && segmentE && !segmentF && segmentG) {
      return '2';
    } else if (segmentA && segmentB && segmentC && segmentD && !segmentE && !segmentF && segmentG) {
      return '3';
    } else if (!segmentA && segmentB && segmentC && !segmentD && !segmentE && segmentF && segmentG) {
      return '4';
    } else if (segmentA && !segmentB && segmentC && segmentD && !segmentE && segmentF && segmentG) {
      return '5';
    } else if (segmentA && !segmentB && segmentC && segmentD && segmentE && segmentF && segmentG) {
      return '6';
    } else if (segmentA && segmentB && segmentC && !segmentD && !segmentE && !segmentF && !segmentG) {
      return '7';
    } else if (segmentA && segmentB && segmentC && segmentD && segmentE && segmentF && segmentG) {
      return '8';
    }

    return '9';
  }

  private initClockFace(): ClockFace {
    const clockFace: ClockFace = [];
    const height = 17;
    const width = 17;
    for (let i = 0; i < height; i++) {
      clockFace.push([]);
      for (let j = 0; j < width; j++) {
        clockFace[i].push('.');
      }
    }

    return clockFace;
  }

  private drawClockBorder(clockFace: ClockFace): ClockFace {
    const radius = 8.5;

    for (let y = 0; y < clockFace.length; y++) {
      for (let x = 0; x < clockFace[y].length; x++) {
        // add 0.5 to x and y to get the center of the pixel
        const adjustedX = x;
        const adjustedY = y;
        // d=√((x2 – x1)² + (y2 – y1)²)
        const dist = Math.sqrt(Math.pow(adjustedX - this.clockCenter.x, 2) + Math.pow(adjustedY - this.clockCenter.y, 2));
        // if the distance is within the radius +- the allowed offset, draw the pixel
        const validDistance = dist < radius + this.tolerance && dist > radius - this.tolerance;
        if (validDistance) {
          clockFace[y][x] = '*';
        }
      }
    }

    return clockFace;
  }

  private drawClockHands(clockFace: ClockFace): ClockFace {
    clockFace = this.drawHourHand(clockFace);
    clockFace = this.drawMinuteHand(clockFace);

    return clockFace;
  }

  private drawHourHand(clockFace: ClockFace): ClockFace {
    // clac the point where the hour hand intersects the clock border
    const slope = Math.tan(this.hourAngle);

    return clockFace;
  }

  private drawMinuteHand(clockFace: ClockFace): ClockFace {
    return clockFace;
  }

}


function solution(digitalTime: ClockFace): ClockFace {
  const analogTime: ClockFace = new timeASCIIRepresentation(digitalTime).getAnalogTime();

  return analogTime;
}

function testing(): void {
  const tests: timeASCIIRepresentationTest[] = [
    { input: [
      ['.', '*', '*', '*', '.', '.', '*', '.', '.', '.', '*', '*', '*', '.', '*', '*', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', ':', '.', '*', '*', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '*', '*', '.', '.', '*', '.', '.', '.', '*', '*', '*', '.', '*', '*', '*']],
    expected: [
      ['.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '.', '.'],
      ['.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '.'],
      ['*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '*', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '*', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '*', '*'],
      ['.', '*', '*', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*', '*', '.'],
      ['.', '.', '*', '*', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*', '*', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.', '*', '.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.']]
    },
  ]

  tests.forEach(test => {
    console.log('result: ');
    console.table(solution(test.input));
    console.log('expected: ');
    console.table(test.expected);
  });
}

testing();