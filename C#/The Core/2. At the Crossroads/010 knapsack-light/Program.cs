/*
 * Knapsack Light Task from CodeSignal
 *
 * You found two items in a treasure chest!
 * The first item weighs weight1 and is worth value1,
 * and the second item weighs weight2 and is worth value2.
 * What is the total maximum value of the items you can take with you,
 * assuming that your max weight capacity is maxW and you can't come back for the items later?
 *
 * Note that there are only two items and you can't bring more than one item of each type,
 * i.e. you can't take two first items or two second items.
 */

using System;

namespace KnapsackLight {
    public class KnapsackLightTest {
        public int value1 { get; set; }
        public int weight1 { get; set; }
        public int value2 { get; set; }
        public int weight2 { get; set; }
        public int maxW { get; set; }
        public int expected { get; set; }
    }

    class KnapsackLightSolution {
        List<KnapsackLightTest> knapsackLightTests = new List<KnapsackLightTest> {
            new KnapsackLightTest { value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, maxW = 8, expected = 10 },
            new KnapsackLightTest { value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, maxW = 9, expected = 16 },
            new KnapsackLightTest { value1 = 5 , weight1 = 3 , value2 = 7, weight2 = 4, maxW = 6, expected = 7 },
            new KnapsackLightTest { value1 = 10, weight1 = 2, value2 = 11, weight2 = 3, maxW = 1, expected = 0 },
        };

        int knapsackLight(int value1, int weight1, int value2, int weight2, int maxW) {
            if (weight1 + weight2 <= maxW) {
                return value1 + value2;
            }

            if (weight1 > maxW && weight2 > maxW) {
                return 0;
            }

            if (weight1 > maxW) {
                return value2;
            }

            if (weight2 > maxW) {
                return value1;
            }

            return Math.Max(value1, value2);
        }

        public void Run() {
            foreach (var test in knapsackLightTests) {
                var result = knapsackLight(test.value1, test.weight1, test.value2, test.weight2, test.maxW);

                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main() {
            var solution = new KnapsackLightSolution();
            solution.Run();
        }
    }
}
