/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = new Set();
    for (let i =0; i<nums.length; i++) {
        if(result.has(nums[i])) {
            result.delete(nums[i]);
        }
        else {
            result.add(nums[i]);
        }
    }
    return [...result][0];
};
// @lc code=end

