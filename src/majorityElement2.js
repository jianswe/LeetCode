// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement2 = function(nums) {
    // Solution 1: Hash Table
    // let numMap = new Map(), ans = []
    // for (const num of nums) {
    //     numMap.set(num, (numMap.get(num) || 0)+1)
    // }
    // // console.log(numMap)
    // for (const [num, count] of numMap) {
    //     if(count > nums.length/3) {
    //         ans.push(num)
    //     }
    // }
    // return ans

    // Follow up: Could you solve the problem in linear time and in O(1) space?
    // Solution 2 : Boyer-Moore Majority Vote Algorithm
    let m1 = 0 , c1 = 0, m2 = 0, c2 = 0, ans = []
    for (const num of nums) {
        if (num === m1) {
            c1++
        } else if (num === m2) {
            c2++
        } else if (c1 === 0) {
            m1 = num
            c1++
        } else if (c2 === 0) {
            m2 = num
            c2++
        } else {
            c1--
            c2--
        }
    }
    c1 = 0
    c2 = 0
    for (const num of nums) {
        if (num === m1) {
            c1++
        } else if (num === m2) {
            c2++
        }
    }
    if(c1>nums.length/3) ans.push(m1)
    if(c2>nums.length/3) ans.push(m2)
    return ans 
};

module.exports = majorityElement2