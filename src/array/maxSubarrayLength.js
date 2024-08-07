/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let maxSubLen = 0, sublen=0, start =0, end=0; 
    let freq = {};
    while (end < nums.length) {
        if(freq[nums[end]]) {
            freq[nums[end]]++;
        } else {
            freq[nums[end]] = 1; 
        }
        sublen++;
        while(freq[nums[end]]>k) {
            freq[nums[start]]--;
            start++;
            sublen--;
        }
        if (sublen > maxSubLen) {
            maxSubLen = sublen; 
        }
        end++;
    }
    return maxSubLen;
};

module.exports = maxSubarrayLength;