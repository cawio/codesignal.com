/*
 *  Given a divisor and a bound, find the largest integer N such that:
 *  N is divisible by divisor.
 *  N is less than or equal to bound.
 *  N is greater than 0.
 *  It is guaranteed that such a number exists.
 */

using System;

namespace MaxMultiple
{
    public class MaxMultipleTest
    {
        public int divisor { get; set; }
        public int bound { get; set; }
        public int expected { get; set; }
    }

    class MaxMultipleSolution
    {
        MaxMultipleTest[] maxMultipleTests = new List<MaxMultipleTest> {
            new MaxMultipleTest { divisor = 3, bound = 10, expected = 9 },
            new MaxMultipleTest { divisor = 2, bound = 7, expected = 6 },
            new MaxMultipleTest { divisor = 10, bound = 50, expected = 50 },
            new MaxMultipleTest { divisor = 7, bound = 100, expected = 98 },
        };

        int maxMultiple(int divisor, int bound) {
            return bound - (bound % divisor);
        }

        public void Run() {
            foreach (var test in maxMultipleTests) {
                var result = maxMultiple(test.divisor, test.bound);
                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main(string[] args) {
            var solution = new MaxMultipleSolution();
            solution.Run();
        }
    }
}
