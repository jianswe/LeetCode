const rob = require('../src/rob')

// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
test('Input: nums = [1,2,3,1]; Output: 4', () => {
    const nums = [1,2,3,1]
    expect(rob(nums)).toBe(4)
})

// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
test('Input: nums = [2,7,9,3,1]; Output: 12', () => {
    const nums = [2,7,9,3,1]
    expect(rob(nums)).toBe(12)
})