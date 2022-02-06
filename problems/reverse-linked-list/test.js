const reverseLinkedList = require("./reverse-linked-list");

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function construct(nums) {
    var head = null;
    for (var i = 0; i < nums.length; i++) {
        if (i == 0) {
            head = new ListNode(nums[i], null);
        } else {
            var parent = head;
            var node = head;
            while (parent.next != null) {
                parent = parent.next;
            }
            while (node != null) {
                node = node.next;
            }
            node = new ListNode(nums[i], null);
            parent.next = node;
        }
    }
    return head;
}
function print(head) {
    var node = head;
    while (node != null) {
        node = node.next;
    }
}

test('Reverse Linked List', () => {
    expect(reverseLinkedList(construct([1, 2, 3, 4, 5]))).toEqual(construct([5, 4, 3, 2, 1]));
    expect(reverseLinkedList(construct([]))).toEqual(construct([]));
    expect(reverseLinkedList(construct([1]))).toEqual(construct([1]));
    expect(reverseLinkedList(construct([0]))).toEqual(construct([0]));
    expect(reverseLinkedList(construct([1, 2]))).toEqual(construct([2, 1]));
})