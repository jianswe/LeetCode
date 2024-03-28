const maxSubarrayLength = require('../src/maxSubarrayLength')

test('Input: nums = [1,2,3,1,2,3,1,2], k = 2', () => {
    const nums = [1,2,3,1,2,3,1,2], k = 2
    expect(maxSubarrayLength(nums, k)).toBe(6) 
})

test('Input: nums = [1,2,1,2,1,2,1,2], k = 1', () => {
    const nums = [1,2,1,2,1,2,1,2], k = 1
    expect(maxSubarrayLength(nums, k)).toBe(2) 
})

test('nums = [5,5,5,5,5,5,5], k = 4', () => {
    const nums = [5,5,5,5,5,5,5], k = 4
    expect(maxSubarrayLength(nums, k)).toBe(4) 
})
