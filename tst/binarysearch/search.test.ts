import search from "../../src/binarysearch/search"

test("Input: nums = [-1,0,3,5,9,12], target = 9; Output: 4", () => {
    const nums = [-1,0,3,5,9,12], target = 9
    expect(search(nums, target)).toBe(4)
})

test("Input: nums = [-1,0,3,5,9,12], target = 2; Output: -1", () => {
    const nums = [-1,0,3,5,9,12], target = 2
    expect(search(nums, target)).toBe(-1)
})