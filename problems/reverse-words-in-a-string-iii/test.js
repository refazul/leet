const reverseWordsInAStringIii = require("./reverse-words-in-a-string-iii");

test('Reverse Words in a String III', () => {
    expect(reverseWordsInAStringIii("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
    expect(reverseWordsInAStringIii("God Ding")).toEqual("doG gniD");
})