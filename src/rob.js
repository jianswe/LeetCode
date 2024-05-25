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