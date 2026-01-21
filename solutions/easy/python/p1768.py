class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []

        n = min(len(word1), len(word2))

        for i in range(n):
            result.append(word1[i])
            result.append(word2[i])

        result.append(word1[n:])
        result.append(word2[n:])

        return ''.join(result)