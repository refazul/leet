const removeNthNodeFromEndOfList = require("./remove-nth-node-from-end-of-list");

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
test("Remove Nth Node From End of List", () => {
    expect(removeNthNodeFromEndOfList(construct([1, 2, 3, 4, 5]), 2)).toEqual(construct([1, 2, 3, 5]));
    expect(removeNthNodeFromEndOfList(construct([1]), 1)).toEqual(construct([]));
});