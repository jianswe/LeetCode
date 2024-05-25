/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function(nums) {
    if (nums.length===1) return nums[0]
    let cache1 = new Array(nums.length).fill(-1)
    let cache2 = new Array(nums.length).fill(-1)
    function dp0(i) {
        if(i===nums.length-1) return 0
        if(i===nums.length-2) {
            cache1[cache1.length-2] = nums[nums.length-2]
            return nums[nums.length-2]
        }
        if (cache1[i]!==-1)return cache1[i]
        cache1[i] = Math.max(dp0(i+1), nums[i]+dp0(i+2)) 
        return cache1[i]
    }
    function dp1(i) {
        if(i===nums.length) return 0
        if(i===nums.length-1) {
            cache2[cache2.length-1] = nums[nums.length-1]
            return nums[nums.length-1]
        }
        if (cache2[i]!==-1)return cache2[i]
        cache2[i] = Math.max(dp1(i+1), nums[i]+dp1(i+2)) 
        return cache2[i]
    }
    const ans = Math.max(dp0(0), dp1(1))
    // console.log(cache1)
    return ans

};

module.exports = rob2