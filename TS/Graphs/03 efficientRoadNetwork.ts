class EfficientRoadNetwork {

}

function solution(n: number, roads: Road[]): boolean {


}

type Road = [number, number];

type TestCase = {
  n: number;
  roads: Road[];
  expected: boolean;
}

function testing(): void {
  const tests: TestCase[] = [
    { n: 4, roads: [[0, 1], [1, 2], [2, 0], [1, 3]], expected: true },
    { n: 4, roads: [[0, 1], [1, 2], [2, 0]], expected: false },
    { n: 4, roads: [[0, 1], [1, 2], [2, 0], [3, 0]], expected: false },
  ];

  tests.forEach(test => {
    const actual = solution(test.n, test.roads);
    console.log(`actual: ${actual}, expected: ${test.expected}`);
  });
}
