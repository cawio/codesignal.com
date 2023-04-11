/*
 * Reach Next Level task from CodeSignal
 *
 * You are playing an RPG game. Currently your experience points (XP) total is equal to experience.
 * To reach the next level your XP should be at least at threshold.
 * If you kill the monster in front of you, you will gain more experience points in the amount of the reward.
 * Given values experience, threshold and reward, check if you reach the next level after killing the monster.
 */

using System;

namespace ReachNextLevel {
    public class ReachNextLevelTest {
        public int experience { get; set; }
        public int threshold { get; set; }
        public int reward { get; set; }
        public bool expected { get; set; }
    }

    class ReachNextLevelSolutin {
        List<ReachNextLevelTest> reachNextLevelTests = new List<ReachNextLevelTest> {
            new ReachNextLevelTest { experience = 10, threshold = 15, reward = 5, expected = true },
            new ReachNextLevelTest { experience = 10, threshold = 15, reward = 4, expected = false },
            new ReachNextLevelTest { experience = 3 , threshold = 6 , reward = 4, expected = true },
            new ReachNextLevelTest { experience = 84, threshold = 135, reward = 36, expected = false },
        };

        bool reachNextLevel(int experience, int threshold, int reward) {
            return experience + reward >= threshold;
        }

        public void Run() {
            foreach (var test in reachNextLevelTests) {
                var result = reachNextLevel(test.experience, test.threshold, test.reward);

                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main() {
            var solution = new ReachNextLevelSolutin();
            solution.Run();
        }
    }
}
