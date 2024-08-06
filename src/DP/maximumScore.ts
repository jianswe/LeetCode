/*
1770. Maximum Score from Performing Multiplication Operations

You are given two 0-indexed integer arrays nums and multipliers of size n and m respectively, where n >= m.

You begin with a score of 0. You want to perform exactly m operations. On the ith operation (0-indexed) you will:

    Choose one integer x from either the start or the end of the array nums.
    Add multipliers[i] * x to your score.
        Note that multipliers[0] corresponds to the first operation, multipliers[1] to the second operation, and so on.
    Remove x from nums.

Return the maximum score after performing m operations.

Example 1:

Input: nums = [1,2,3], multipliers = [3,2,1]
Output: 14
Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
The total score is 9 + 4 + 1 = 14.

Example 2:

Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
Output: 102
Explanation: An optimal solution is as follows:
- Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
- Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
- Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
- Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
- Choose from the end, [-2,7], adding 7 * 6 = 42 to the score. 
The total score is 50 + 15 - 9 + 4 + 42 = 102.
*/

function maximumScore(nums: number[], multipliers: number[]): number {
    const n = nums.length, m = multipliers.length // n >= m 
    // since right can be calculated according to i and left.
    // we only need 2D array for memo 
    // since we are asked for max score, init values to -Infinity
    let memo = new Array(m).fill(null).map(() => new Array(n).fill(-Infinity))
    function dp(i, left, right) { 
        if (memo[i][left] !== -Infinity) return memo[i][left]
        // console.log(i, left, right)
        // we can not use i === 0 as base case, since we need to start with i===0
        // otherwise we don't know where the left and right pointers should be. 
        // base case is where the recursion ends. 
        if (i===m-1) {
            const option1 = nums[left] * multipliers[i]
            const option2 = nums[right] * multipliers[i]
            memo[i][left] = Math.max(option1, option2)
            return memo[i][left]
        } 
        const option1 = nums[left] * multipliers[i] + dp(i+1 , left+1, right)
        const option2 = nums[right] * multipliers[i] + dp(i+1, left, right-1)
        memo[i][left] = Math.max(option1, option2)
        return memo[i][left]
    }

    return dp(0, 0, n-1)
};

export default maximumScore