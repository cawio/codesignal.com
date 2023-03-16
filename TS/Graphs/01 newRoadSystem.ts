interface RoadSystemTests {
  roadRegister: boolean[][];
  expected: boolean;
}

interface CityRoads {
  incoming: number;
  outgoing: number;
}

class RoadSystem {
  private cityRoads: CityRoads[];

  constructor(
    private roadRegister: boolean[][],
    private expected: boolean,
  ) {
    this.cityRoads = new Array(roadRegister.length);
    this.countCityConnections();
    this.test();
  }

  private countCityConnections(): void {
    for (let i = 0; i < this.roadRegister.length; i++) {
      let incoming = 0;
      let outgoing = 0;
      for (let j = 0; j < this.roadRegister.length; j++) {
        if (this.roadRegister[i][j]) {
          outgoing++;
        }
        if (this.roadRegister[j][i]) {
          incoming++;
        }
      }
      this.cityRoads[i] = { incoming, outgoing };
    }
  }

  private evaluateResult(): boolean {
    for (let i = 0; i < this.cityRoads.length; i++) {
      if (this.cityRoads[i].incoming !== this.cityRoads[i].outgoing) {
        return false;
      }
    }
    return true;
  }

  public test(): void {
    let result = this.evaluateResult();
    console.log(`Test result: ${result}`);
    console.log(`Expected result: ${this.expected}`);
    console.log(`Test passed: ${result === this.expected}`);
  }
}

function main(): void {
  let tests: RoadSystemTests[] = [
    { roadRegister: [
        [false, true,  false, false],
        [false, false, true,  false],
        [true,  false, false, true ],
        [false, false, true,  false]],
      expected: true },
    { roadRegister: [
        [false, true,  false, false, false, false, false],
        [true,  false, false, false, false, false, false],
        [false, false, false, true,  false, false, false],
        [false, false, true,  false, false, false, false],
        [false, false, false, false, false, false, true ],
        [false, false, false, false, true,  false, false],
        [false, false, false, false, false, true,  false]
      ],
      expected: true }
  ]

  for(let test of tests) {
    new RoadSystem(test.roadRegister, test.expected);
  }
}

main();
