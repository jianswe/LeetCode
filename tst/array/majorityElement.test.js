const majorityElement = require("../../src/array/majorityElement")

test("Input: nums = [3,2,3]; Output: 3", () => {
    const nums = [3,2,3]
    expect(majorityElement(nums)).toBe(3)
})

test("Input: nums = [2,2,1,1,1,2,2]; Output: 2", () => {
    const nums = [2,2,1,1,1,2,2]
    expect(majorityElement(nums)).toBe(2)
})