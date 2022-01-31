#include <cmath>
class Solution
{
public:
    bool isPalindrome(int x)
    {
        unsigned int z = (unsigned int) x < 0 ? -x : x;
        unsigned int y = 0;
        while (z != 0)
        {
            y = y * 10 + (z % 10);
            z = floor(z / 10);
        }
        return x < 0 ? false : x == y;
    }
};