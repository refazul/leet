const bestTimeToBuyAndSellStock = require("./best-time-to-buy-and-sell-stock-tle");

test('Best Time to Buy and Sell Stock', () => {
    expect(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toBe(0);
    expect(bestTimeToBuyAndSellStock([2, 4, 1])).toBe(2);
})