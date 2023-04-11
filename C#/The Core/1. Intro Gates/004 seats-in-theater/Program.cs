namespace SeatsInTheater
{
    public class SeatsInTheaterTest
    {
        public int nCols { get; set; }
        public int nRows { get; set; }
        public int col { get; set; }
        public int row { get; set; }
        public int expected { get; set; }
    }

    class SeatsInTheaterSolutin {

        SeatsInTheaterTest[] seatsInTheaterTests = new [] {
            new SeatsInTheaterTest { nCols = 16, nRows = 11, col = 5, row = 3, expected = 96 },
            new SeatsInTheaterTest { nCols = 1, nRows = 1, col = 1, row = 1, expected = 0 },
            new SeatsInTheaterTest { nCols = 13, nRows = 6, col = 8, row = 3, expected = 18 },
            new SeatsInTheaterTest { nCols = 60, nRows = 100, col = 60, row = 1, expected = 99 },
            new SeatsInTheaterTest { nCols = 1000, nRows = 1000, col = 1000, row = 1000, expected = 0 },
        };

        int seatsInTheater(int nCols, int nRows, int col, int row) {
            return (nCols - col + 1) * (nRows - row);
        }

        public void Run() {
            foreach (var test in seatsInTheaterTests) {
                var result = seatsInTheater(test.nCols, test.nRows, test.col, test.row);
                System.Console.WriteLine($"expected: {test.expected}, result: {result}");
            }
        }

        static void Main(string[] args) {
            var solution = new SeatsInTheaterSolutin();
            solution.Run();
        }
    }
}
