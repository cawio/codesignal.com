/*
 *  Circle of numbers task from CodeSignal
 *
 *  Consider integer numbers from 0 to n - 1 written down along the circle
 *  in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
 *  Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
 */

using System;

namespace CircleOfNumbers
{
    public class CircleOfNumbersTest
    {
        public int n { get; set; }
        public int firstNumber { get; set; }
        public int expected { get; set; }
    }

    class CircleOfNumbersSolution
    {
        List<CircleOfNumbersTest> circleOfNumbersTests = new List<CircleOfNumbersTest> {
            new CircleOfNumbersTest { n = 10, firstNumber = 2, expected = 7 },
            new CircleOfNumbersTest { n = 10, firstNumber = 7, expected = 2 },
            new CircleOfNumbersTest { n = 4, firstNumber = 1, expected = 3 },
            new CircleOfNumbersTest { n = 6, firstNumber = 3, expected = 0 },
        };

        int circleOfNumbers(int n, int firstNumber) {
            return (firstNumber + n / 2) % n;
        }

        public void Run()
        {
            foreach (var test in circleOfNumbersTests)
            {
                var result = circleOfNumbers(test.n, test.firstNumber);

                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main()
        {
            var solution = new CircleOfNumbersSolution();
            solution.Run();
        }
    }
}
