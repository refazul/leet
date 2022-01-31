#include <iostream>
using namespace std;

#include <string>
#include "palindrome-number.cpp"

int main()
{
    //string line;
    int line;
    // For getting input from input.txt file
    freopen("input.txt", "r", stdin);

    // Printing the Output to output.txt file
    freopen("output.txt", "w", stdout);

    while (cin>>line)
    {
        Solution* s = new Solution();
        string output = s->isPalindrome(line) ? "yes" : "no";
        cout<<line<<" "<<output<<endl;
    }
}