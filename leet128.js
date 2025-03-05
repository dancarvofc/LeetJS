/**
 * @param {number[]} nums
 * @return {number}
 */
function leet128(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    let uniqueNums = [];

    // Remover duplicatas
    nums.forEach((num, index) => {
        if (index === 0 || nums[index] !== nums[index - 1]) {
            uniqueNums.push(num);
        }
    });

    let longestStreak = 1;
    let currentStreak = 1;

    uniqueNums.forEach((num, index) => {
        if (index > 0) {
            if (uniqueNums[index] === uniqueNums[index - 1] + 1) {
                currentStreak++;
            } else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    });

    return Math.max(longestStreak, currentStreak);
}

const nums = [100, 4, 200, 1, 3, 2];
console.log(leet128(nums)); // Saída: 4, que representa a sequência [1, 2, 3, 4]
