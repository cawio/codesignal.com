/*
 * Extra Number task from CodeSignal
 *
 * You're given three integers, a, b and c.
 * It is guaranteed that two of these integers are equal to each other.
 * What is the value of the third integer?
 */

using System;

namespace ExtraNumber {
    public class ExtraNumberTest {
        public int a { get; set; }
        public int b { get; set; }
        public int c { get; set; }
        public int expected { get; set; }
    }

    class ExtraNumberSolution {
        List<ExtraNumberTest> extraNumberTests = new List<ExtraNumberTest> {
            new ExtraNumberTest { a = 2, b = 7, c = 2, expected = 7 },
            new ExtraNumberTest { a = 3, b = 2, c = 2, expected = 3 },
            new ExtraNumberTest { a = 5, b = 5, c = 1, expected = 1 },
            new ExtraNumberTest { a = 3, b = 3, c = 3, expected = 3 },
        };

        int extraNumber(int a, int b, int c) {
            if (a == b) {
                return c;
            }

            if (a == c) {
                return b;
            }

            return a;
        }

        public void Run() {
            foreach (var test in extraNumberTests) {
                var result = extraNumber(test.a, test.b, test.c);

                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main() {
            var solution = new ExtraNumberSolution();
            solution.Run();
        }
    }
}