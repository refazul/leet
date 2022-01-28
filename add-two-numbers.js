/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    var list1 = l1;
    var list2 = l2;

    var list3 = [];
    var l = list1.length > list2.length ? list1.length : list2.length;
    var carry = 0;
    for (var i = 0; i < l; i++) {
        if (Number.isInteger(list1[i]) && Number.isInteger(list2[i])) {
            list3.push((list1[i] + list2[i] + carry) % 10);
            carry = Math.floor((list1[i] + list2[i] + carry) / 10);
        }
        else {
            if (Number.isInteger(list1[i])) {
                list3.push((list1[i] + carry) % 10);
                carry = Math.floor((list1[i] + carry) / 10);
            } else if (Number.isInteger(list2[i])) {
                list3.push((list2[i] + carry) % 10);
                carry = Math.floor((list2[i] + carry) / 10);
            }
        }
    }
    if (carry > 0) list3.push(carry);
    if (list3.length == 0) list3 = [0]

    var nodes = [];
    var i = 0;
    var temp = null;
    while (list3.length != 0) {
        var value = list3.pop();
        if (i > 0) {
            temp = nodes[nodes.length - 1]
        }
        var n = new ListNode(value, temp);
        nodes.push(n);
        i++;
    }
    nodes.reverse();
    return nodes[0];
};