/*
 * Last Factorial Task from CodeSignal
 *
 * Given an integer n, find the minimal k such that
 *  - k = m! (where m! = 1 * 2 * ... * m) for some integer m;
 *  - k >= n.
 *
 * In other words, find the smallest factorial which is not less than n.
 */

using System;

namespace LeastFactorial {

    public class LeastFactorialTest {
        public int n { get; set; }
        public int expected { get; set; }
    }

    class LeastFactorialSolution {
        List<LeastFactorialTest> leastFactorialTests = new List<LeastFactorialTest> {
            new LeastFactorialTest { n = 17, expected = 24 },
            new LeastFactorialTest { n = 1, expected = 1 },
            new LeastFactorialTest { n = 5, expected = 6 },
            new LeastFactorialTest { n = 25, expected = 120 },
        };

        public static int leastFactorial(int n) {
            int k = 1;
            int m = 1;
            while (k < n) {
                m++;
                k *= m;
            }
            return k;
        }

        public void Run() {
            foreach (var test in leastFactorialTests) {
                var result = leastFactorial(test.n);
                Console.WriteLine($"result = {result} expected = {test.expected}");
            }
        }

        static void Main() {
            var solution = new LeastFactorialSolution();
            solution.Run();
        }
    }
}