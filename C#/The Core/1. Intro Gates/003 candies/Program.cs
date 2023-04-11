int candies(int n, int m) {
  return n * (m / n);
}

void main() {
  int[][] candiesTests = new [] {
    new int[] {3, 10},
    new int[] {1, 2},
    new int[] {10, 5},
    new int[] {4, 4},
  };

  foreach (var test in candiesTests) {
    if (test.Length != 2) {
      Console.WriteLine("Invalid test");
      continue;
    }
    int result = candies(test[0], test[1]);
    Console.WriteLine(result);
  }
}

main();
