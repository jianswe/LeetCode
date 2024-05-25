/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefixSum = [nums[0]], count = new Map(), ans = 0
    count.set(0, 1)
    for (const num of nums.slice(1)) {
        prefixSum.push(prefixSum[prefixSum.length-1] + num)
    }
    // console.log(prefixSum)
    for (const preSum of prefixSum) {
        // console.log(ans)
        const target = preSum - k
        // console.log(count)
        ans += count.get(target) || 0
        count.set(preSum, (count.get(preSum)||0) + 1) 
    }
    return ans 
};