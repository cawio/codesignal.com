using System;
using System.Diagnostics;

[DebuggerDisplay($"{{{nameof(GetDebuggerDisplay)}(),nq}}")]
internal class Program
{
    private static void Main(string[] args)
    {
        var msg = "Hello World";
        Console.Write(msg);
    }

    private string GetDebuggerDisplay()
    {
        return ToString();
    }
}