/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = function (nums) {
    function merge(a, b) {
        let storage = [];
        let aLen = a.length;
        let bLen = b.length;
        let i = 0;
        let j = 0;

        while (i < aLen || j < bLen) {
            if (a[i] < b[j]) {
                storage.push(a[i]);
                i++;
            }
            else if (a[i] >= b[j]) {
                storage.push(b[j]);
                j++;
            }
            else if (a[i] === undefined) {
                storage.push(b[j]);
                j++;
            }
            else if (b[j] === undefined) {
                storage.push(a[i]);
                i++;
            }
        }
        return storage
    }
    var negative_list = nums.filter(o => o < 0).map(o => o * o);
    var positive_list = nums.filter(o => o >= 0).map(o => o * o);

    negative_list.reverse();
    var new_list = merge(positive_list, negative_list);
    return new_list;
};
