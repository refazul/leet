const containsDuplicate = require("./contains-duplicate");

test("Contains Duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    expect(containsDuplicate([-669,58,-952,-579,948,950,82,-259,-699,414,113,873,-944,553,82,-389,317,769,-813,426,732,-465,62,-248,861,-657,-271,581,-543,91,110,596,30,-324,304,-543])).toBe(true);
});