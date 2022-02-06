/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
module.exports = function (head, k) {
    var current = head;
    var last = head;
    var len = 0;
    while (current != null) {
        if (current.next == null) {
            last = current;
        }
        current = current.next;
        len++;
    }
    k = k % len;
    var split = len - k;
    current = head;
    while (split-- > 1) {
        current = current.next;
    }
    if (last != null) {
        last.next = head;
    }
    if (current != null) {
        head = current.next;
        current.next = null
    }
    return head;
};