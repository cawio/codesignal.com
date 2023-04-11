/*
 * Phone Call task from CodeSignal
 *
 * Some phone usage rate may be described as follows:
 *  - first minute of a call costs min1 cents,
 *  - each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
 *  - each minute after 10th costs min11 cents.
 * You have s cents on your account before the call.
 * What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
 */

using System;

namespace PhoneCall {
    public class PhoneCallTest {
        public int min1 { get; set; }
        public int min2_10 { get; set; }
        public int min11 { get; set; }
        public int s { get; set; }
        public int expected { get; set; }
    }

    class PhoneCallSolution {
        List<PhoneCallTest> phoneCallTests = new List<PhoneCallTest> {
            new PhoneCallTest { min1 = 3, min2_10 = 1, min11 = 2, s = 20, expected = 14 },
            new PhoneCallTest { min1 = 2, min2_10 = 2, min11 = 1, s = 2, expected = 1 },
            new PhoneCallTest { min1 = 10, min2_10 = 1, min11 = 2, s = 22, expected = 11 },
            new PhoneCallTest { min1 = 2, min2_10 = 2, min11 = 1, s = 24, expected = 14 },
            new PhoneCallTest { min1 = 1, min2_10 = 2, min11 = 1, s = 6, expected = 3 },
        };

        int phoneCall(int min1, int min2_10, int min11, int s) {
            int minutes = 0;

            if (s >= min1) {
                minutes++;
                s -= min1;
            } else {
                return minutes;
            }

            if (s >= min2_10 * 9) {
                minutes += 9;
                s -= min2_10 * 9;
            } else {
                minutes += s / min2_10;
                return minutes;
            }

            minutes += s / min11;

            return minutes;
        }

        public void Run() {
            foreach (var test in phoneCallTests) {
                var result = phoneCall(test.min1, test.min2_10, test.min11, test.s);

                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main() {
            var solution = new PhoneCallSolution();
            solution.Run();
        }
    }
}