const rob2 = require('../../src/DP/rob2')

test('Input: nums = [2,3,2], Output: 3', () => {
    const nums = [2,3,2]
    expect(rob2(nums)).toBe(3)
})

test('Input: nums = [1,2,3,1], Output: 4', () => {
    const nums = [2,3,2]
    expect(rob2(nums)).toBe(3)
})

test('Input: nums = [1,2,3], Output: 3', () => {
    const nums = [2,3,2]
    expect(rob2(nums)).toBe(3)
})