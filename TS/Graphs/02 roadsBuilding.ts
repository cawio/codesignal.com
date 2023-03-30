type Road = [number, number];
type CityConnections = boolean[];

class RoadsBuilding {
  private cityConnections: CityConnections[] = [];

  constructor(cities: number, roads: Road[]) {
    // Initialize city connections
    for (let i = 0; i < cities; i++) {
      this.cityConnections[i] = new Array(cities).fill(false);
    }

    // Add existing roads
    roads.forEach((road: Road) => {
      this.cityConnections[road[0]][road[1]] = true;
      this.cityConnections[road[1]][road[0]] = true;
    });
  }

  public getRoadsToBuild(): Road[] {
    const roadsToBuild: Road[] = [];
    this.cityConnections.forEach((cityConnections: CityConnections, city: number) => {
      cityConnections.forEach((connected: boolean, otherCity: number) => {
        if (city === otherCity) {
          return;
        }
        // if they are not connected and the road has not been added yet
        if (!connected && !roadsToBuild.some((road: Road) => (road[0] === otherCity && road[1] === city))) {
          roadsToBuild.push([city, otherCity]);
        }
      });
    });

    // retrun the roads lexicographically sorted
    return roadsToBuild.sort((a: Road, b: Road) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
  }
}

function solution(cities: number, roads: Road[]): Road[] {
  const roadsToBuild: Road[] = new RoadsBuilding(cities, roads).getRoadsToBuild();

  return roadsToBuild;
}

function testing(): void {
  type TestCase = {
    cities: number;
    roads: Road[];
    expected: Road[];
  };

  const testCases: TestCase[] = [
    { cities: 4,
      roads: [[0,1],
              [1,2],
              [2,0]],
      expected: [[0,3],
                 [1,3],
                 [2,3]], },
  ];

  testCases.forEach((testCase: TestCase) => {
    const actual: number[][] = solution(testCase.cities, testCase.roads);
    console.log('actual:');
    console.table(actual);
    console.log('expected:');
    console.table(testCase.expected);
  });
}

testing();
