class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maximum = 0
        streak = 0
        n = len(nums)

        for i in range(n):
            if(nums[i] == 1):
                streak = streak + 1
                if streak > maximum :
                    maximum = streak
            else:
                streak = 0
        
        return maximum