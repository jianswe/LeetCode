/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs2 = function(nums1, nums2, k) {
    let ans = 0, nums2Map = new Map()
    nums1 = nums1.filter(num=>num%k===0).map(num=>num/k)
    for (const num2 of nums2) {
        nums2Map.set(num2, (nums2Map.get(num2) ?? 0) + 1)
    }

    for (const num1 of nums1) {
        for (let i=1; i<=Math.sqrt(num1); i++) {
            if(num1%i !== 0) continue 
            if(nums2Map.has(i)) {
                ans += nums2Map.get(i)
            }
            if(num1/i !== i && nums2Map.has(num1/i)) {
                ans += nums2Map.get(num1/i)
            }

        } 
    }

    return ans 
};

module.exports = numberOfPairs2