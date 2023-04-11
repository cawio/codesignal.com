/*
 * Count Sum of Two Representations 2 Task from CodeSignal
 *
 * Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
 */

using System;

namespace CountSumOfTwoRepresentations2 {

    public class CountSumOfTwoRepresentations2Test {
        public int n { get; set; }
        public int l { get; set; }
        public int r { get; set; }
        public int expected { get; set; }
    }

    class CountSumOfTwoRepresentations2Solution {
        List<CountSumOfTwoRepresentations2Test> countSumOfTwoRepresentations2Tests = new List<CountSumOfTwoRepresentations2Test> {
            new CountSumOfTwoRepresentations2Test { n = 6, l = 2, r = 4, expected = 2 },
            new CountSumOfTwoRepresentations2Test { n = 6, l = 3, r = 3, expected = 1 },
            new CountSumOfTwoRepresentations2Test { n = 10, l = 9, r = 11, expected = 0 },
            new CountSumOfTwoRepresentations2Test { n = 24, l = 8, r = 16, expected = 5 },
            new CountSumOfTwoRepresentations2Test { n = 24, l = 12, r = 12, expected = 1 },
        };

        public static int countSumOfTwoRepresentations2(int n, int l, int r) {
            int count = 0;
            for (int i = l; i <= r; i++) {
                if (i <= n - i && n - i >= l && n - i <= r) {
                    count++;
                }
            }

            return count;
        }

        public void Run() {
            foreach (var test in countSumOfTwoRepresentations2Tests) {
                var result = countSumOfTwoRepresentations2(test.n, test.l, test.r);
                Console.WriteLine($"result = {result} expected = {test.expected}");
            }
        }

        static void Main() {
            var solution = new CountSumOfTwoRepresentations2Solution();
            solution.Run();
        }
    }
}