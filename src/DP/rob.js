/*
it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let cache = new Array(nums.length).fill(-1)
    function dp(i) {
        if(cache[i] !== -1) return cache[i]
        if(i===0) {
            cache[0] = nums[0]
            return cache[0]
        }
        if(i===1) {
            cache[1] = Math.max(nums[0], nums[1])
            return cache[1]
        }
        cache[i] = Math.max(dp(i-1), dp(i-2)+nums[i])
        return cache[i]
    }
    return dp(nums.length-1)
};

module.exports = rob