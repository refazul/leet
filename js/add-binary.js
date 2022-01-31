/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var list1 = a.split('');
    var list2 = b.split('');
    list1.reverse();
    list2.reverse();

    var l = list1.length > list2.length ? list1.length : list2.length;
    var list3 = [];
    var carry = 0;
    for (var i = 0; i < l; i++) {
        var first = list1[i] || '0';
        var second = list2[i] || '0';
        if (carry == 0) {
            if (first == '1' && second == '1') {
                list3.push('0');
                carry = 1;
            } else if (first == '1' && second == '0') {
                list3.push('1');
                carry = 0;

            } else if (first == '0' && second == '1') {
                list3.push('1');
                carry = 0;

            } else if (first == '0' && second == '0') {
                list3.push('0');
                carry = 0;
            }
        } else {
            if (first == '1' && second == '1') {
                list3.push('1');
                carry = 1;
            } else if (first == '1' && second == '0') {
                list3.push('0');
                carry = 1;
            } else if (first == '0' && second == '1') {
                list3.push('0');
                carry = 1;
            } else if (first == '0' && second == '0') {
                list3.push('1');
                carry = 0;
            }
        }
    }
    if (carry > 0) {
        list3.push('1');
    }
    list3.reverse();
    return list3.join('');
};