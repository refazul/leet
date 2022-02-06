const deleteTheMiddleNodeOfALinkedList = require("./delete-the-middle-node-of-a-linked-list");

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

test('Rotate List', () => {
    expect(deleteTheMiddleNodeOfALinkedList(construct([1, 3, 4, 7, 1, 2, 6]))).toEqual(construct([1, 3, 4, 1, 2, 6]));
    expect(deleteTheMiddleNodeOfALinkedList(construct([1, 2, 3, 4]))).toEqual(construct([1, 2, 4]));
    expect(deleteTheMiddleNodeOfALinkedList(construct([2, 1]))).toEqual(construct([2]));
    expect(deleteTheMiddleNodeOfALinkedList(construct([1]))).toEqual(construct([]));
})