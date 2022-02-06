const middleOfTheLinkedList = require("./middle-of-the-linked-list");

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

test('Middle of the Linked List', () => {
    expect(middleOfTheLinkedList(construct([1, 2, 3, 4, 5]))).toEqual(construct([3, 4, 5]));
    expect(middleOfTheLinkedList(construct([1, 2, 3, 4, 5, 6]))).toEqual(construct([4, 5, 6]));
})