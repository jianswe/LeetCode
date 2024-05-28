const numberOfPairs = require("../src/numberOfPairs")

test("Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1; Output: 5", () => {
    const nums1 = [1,3,4], nums2 = [1,3,4], k = 1
    expect(numberOfPairs(nums1, nums2, k)).toBe(5)
})

test("Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3; Output: 2", () => {
    const nums1 = [1,2,4,12], nums2 = [2,4], k = 3
    expect(numberOfPairs(nums1, nums2, k)).toBe(2)
})