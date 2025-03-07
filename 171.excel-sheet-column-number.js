/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let LongResult = 0;
    if (columnTitle.length === 1) {
        return getLetterValue(columnTitle);
    }
    else {
        for (let i = 0; i < columnTitle.length; i++) {
            const value = getLetterValue(columnTitle[i]);
            LongResult = LongResult * 26 + value;
        }
        return LongResult;
    }
};

function getLetterValue(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(letter.toLowerCase()) + 1
    return index > 0 ? index : null;
}
// @lc code=end

