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
    if (head == null) {
        return head;
    }
    var a = head;
    var b = head;
    var c = head;
    if (a.next == null) {
        return head;
    }
    b = a.next;
    if (b.next == null) {
        a.next = null;
        b.next = a;
        head = b;
        return head;
    }
    c = b.next;
    a.next = null;
    b.next = a;
    while (true) {
        a = c.next;
        c.next = b;
        if (a == null) {
            head = c;
            return head;
        }

        b = a.next;
        a.next = c;
        if (b == null) {
            head = a;
            return head;
        }

        c = b.next;
        b.next = a;
        if (c == null) {
            head = b;
            return head;
        }
    }
};