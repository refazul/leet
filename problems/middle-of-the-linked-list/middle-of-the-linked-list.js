/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
module.exports = function (head) {
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
    var mid = Math.floor(len / 2);
    current = head;
    while (mid-- > 0) {
        current = current.next;
    }
    head = current;
    return head;
};