/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0; 
    let left = 0, right = 0, product = 1, count = 0;  
    while (right < nums.length) {
        product *= nums[right];
        while(product >= k) {
            product /= nums[left];
            left++;
        }
        count += right - left + 1;  
        right++; 
    } 
    return count; 
};

module.exports = numSubarrayProductLessThanK;