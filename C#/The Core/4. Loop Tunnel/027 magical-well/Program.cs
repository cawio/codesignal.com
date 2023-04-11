/*
 * Magical Well Task from CodeSignal
 *
 * You are standing at a magical well.
 * It has two positive integers written on it: a and b.
 * Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1.
 * You have n magic marbles.
 * How much money will you make?
 */

using System;

namespace MagicWell {

      public class MagicalWellTest {
          public int a { get; set; }
          public int b { get; set; }
          public int n { get; set; }
          public int expected { get; set; }
      }

      class MagicalWellSolution {
          List<MagicalWellTest> magicalWellTests = new List<MagicalWellTest> {
              new MagicalWellTest { a = 1, b = 2, n = 2, expected = 8 },
              new MagicalWellTest { a = 1, b = 1, n = 1, expected = 1 },
              new MagicalWellTest { a = 6, b = 5, n = 3, expected = 128 },
              new MagicalWellTest { a = 1601, b = 337, n = 0, expected = 0 },
              new MagicalWellTest { a = 1891, b = 352, n = 0, expected = 0 },
          };

          public static int magicalWell(int a, int b, int n) {
              int sum = 0;
              for (int i = 0; i < n; i++) {
                  sum += a * b;
                  a++;
                  b++;
              }

              return sum;
          }

          public void Run() {
              foreach (var test in magicalWellTests) {
                  var result = magicalWell(test.a, test.b, test.n);
                  Console.WriteLine($"result = {result} expected = {test.expected}");
              }
          }

          static void Main() {
              var solution = new MagicalWellSolution();
              solution.Run();
          }
      }
}
