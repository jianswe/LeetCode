/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Solution 1: Hash Table
    // let dict = {}
    // for (const num of nums) {
    //     if (num in dict) {
    //         dict[num]++;
    //     } else {
    //         dict[num] = 1;
    //     }
    // }
    // for (const num in dict) {
    //     if(dict[num] > nums.length/2) {
    //         return num
    //     }
    // }

    // Follow-up: Could you solve the problem in linear time and in O(1) space?
    // Solution 2 : Boyer-Moore Majority Vote Algorithm
    let count = 0, majority 
    for (const num of nums) {
        if (num === majority) {
            count++
        } else {
            if (count===0) {
                majority = num
                count++
            } else {
                count--
            }
        }
    }
    return majority
};

module.exports = majorityElement