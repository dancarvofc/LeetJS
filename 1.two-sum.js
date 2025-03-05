/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const indices = [];

    // Usamos dois loops para verificar todos os pares possíveis
    nums.forEach((num, index) => {
        nums.slice(index + 1).forEach((nextNum, nextIndex) => {
            if (num + nextNum === target) {
                indices.push(index, index + nextIndex + 1);  // Adiciona os índices encontrados
            }
        });
    });

    return indices;

};
// @lc code=end

