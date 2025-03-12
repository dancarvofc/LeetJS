/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
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
var deleteDuplicates = function(head) {
    if(head === null) return head;

    if(head.next !== null && head.val === head.next.val) {
        head = deleteDuplicates(head.next);
    }
    else {
        head.next = deleteDuplicates(head.next);
    }
    return head;
};
// @lc code=end

