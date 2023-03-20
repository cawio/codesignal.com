internal class Program
{
    private static void Main(string[] args)
    {
        int addTwoDigits(int n)
        {
            int sum = 0;
            while (n > 0) {
                sum += n % 10;
                n /= 10;
            }

            return sum;
        }

        var test = 1223;
        Console.WriteLine(addTwoDigits(test));
    }
}