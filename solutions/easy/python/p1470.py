class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        part1 = nums[:n]
        part2 = nums[n:]

        final = []

        for i in range(n):
            final.append(part1[i])
            final.append(part2[i])
        
        return final