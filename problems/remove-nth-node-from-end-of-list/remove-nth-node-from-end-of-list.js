/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
module.exports = function (head, n) {
    var current = head;
    var len = 0;
    while (current != null) {
        current = current.next;
        len++;
    }
    if (n == len) {
        head = head.next;
    } else if (n > len) {
        // do nothing
    } else {
        var j = len - n - 2;
        current = head;
        while (j >= 0) {
            current = current.next;
            j--;
        }
        current.next = current.next.next;
    }
    return head;
};