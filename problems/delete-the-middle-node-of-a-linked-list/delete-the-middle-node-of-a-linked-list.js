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
function print(head) {
    var node = head;
    while (node != null) {
        console.log(node.val);
        node = node.next;
    }
}
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
    if (mid == 0) {
        return null
    }
    current = head;
    while (mid-- > 1) {
        current = current.next;
    }
    if (current.next) {
        current.next = current.next.next;
    }
    return head;
};