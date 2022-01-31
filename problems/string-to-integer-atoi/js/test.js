const stringToIntegerAtoi = require('./string-to-integer-atoi');

test('String to Integer (atoi)', () => {
    expect(stringToIntegerAtoi("-12")).toBe(-12);
    expect(stringToIntegerAtoi("   -42")).toBe(-42);
    expect(stringToIntegerAtoi("  -0012a42")).toBe(-12);
    expect(stringToIntegerAtoi("00000-42a1234")).toBe(0);
    expect(stringToIntegerAtoi("-91283472332")).toBe(-2147483648);
    expect(stringToIntegerAtoi("words and 987")).toBe(0);
    expect(stringToIntegerAtoi("4193 with words")).toBe(4193);
    expect(stringToIntegerAtoi("words and 987")).toBe(0);
    expect(stringToIntegerAtoi("      -11919730356x")).toBe(-2147483648);
    expect(stringToIntegerAtoi("      -1191 9730356x")).toBe(-1191);
});