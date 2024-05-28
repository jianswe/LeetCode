const majorityElement2 = require('../src/majorityElement2')

test('Input: nums = [3,2,3]; Output: [3]', () => {
    const nums = [3,2,3]
    expect(majorityElement2(nums)).toEqual([3])
})

test('Input: nums = [1]; Output: [1]', () => {
    const nums = [1]
    expect(majorityElement2(nums)).toEqual([1])
})

test('Input: nums = [1,2]; Output: [1,2]', () => {
    const nums = [1,2]
    expect(majorityElement2(nums)).toEqual([1,2])
})