const myAtoi = require('./string-to-integer-atoi')

test('string-to-integer-atoi', () => {
    expect(myAtoi("-12")).toBe(-12);
    expect(myAtoi("   -42")).toBe(-42);
    expect(myAtoi("  -0012a42")).toBe(-12);
    expect(myAtoi("00000-42a1234")).toBe(0);
    expect(myAtoi("-91283472332")).toBe(-2147483648);
    expect(myAtoi("words and 987")).toBe(0);
    expect(myAtoi("4193 with words")).toBe(4193);
    expect(myAtoi("words and 987")).toBe(0);
    expect(myAtoi("      -11919730356x")).toBe(-2147483648);
    expect(myAtoi("      -1191 9730356x")).toBe(-1191);
});