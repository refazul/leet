const firstBadVersion = require("./first-bad-version");

isBadVersion = function (version) {
    if (version >= 1000000) {
        return true;
    }
    return false;
}

test('First Bad Version', () => {
    expect(firstBadVersion(isBadVersion)(2000000)).toBe(1000000)
});