/*
 * Late Ride task from CodeSignal
 *
 * One night you go for a ride on your motorcycle.
 * At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes.
 * Off you go to explore the neighborhood.
 * When you finally decide to head back, you realize there's a chance the bridges on your route home are up,
 * leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is.
 * All you know thanks to the bike's timer is that n minutes have passed since 00:00.
 * Using the bike's timer, calculate the current time.
 * Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
 */

using System;

namespace LateRide
{
  public class LateRideTest
  {
    public int n { get; set; }
    public int expected { get; set; }
  }

  class LateRideSolution
  {
    List<LateRideTest> lateRideTests = new List<LateRideTest> {
      new LateRideTest { n = 240, expected = 4 },
      new LateRideTest { n = 808, expected = 14 },
      new LateRideTest { n = 1439, expected = 19 },
      new LateRideTest { n = 0, expected = 0 },
      new LateRideTest { n = 23, expected = 5 },
      new LateRideTest { n = 8, expected = 8 },
    };

    int lateRide(int n) {
      var hours = n / 60;
      var minutes = n % 60;

      return hours / 10 + hours % 10 + minutes / 10 + minutes % 10;
    }

    public void Run() {
      foreach (var test in lateRideTests) {
        var result = lateRide(test.n);

        System.Console.WriteLine($"expected: {test.expected}, result: {result}");
      }
    }

    static void Main() {
      var solution = new LateRideSolution();
      solution.Run();
    }
  }
}
