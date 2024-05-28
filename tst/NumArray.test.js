const NumArray = require("../src/NumArray")

test('Input: ["NumArray", "sumRange", "update", "sumRange"], [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]; Output: [null, 9, null, 8]', () => {
    const nums = [1, 3, 5]
    var obj = new NumArray(nums)
    expect(obj.sumRange(0, 2)).toBe(9)
    obj.update(1, 2)
    expect(obj.sumRange(0, 2)).toBe(8)
})

test('Input: ["NumArray","update","sumRange","sumRange","update","sumRange"], [[[9,-8]],[0,3],[1,1],[0,1],[1,-3],[0,1]]; Output: [null,null,-8,-5,null,0]', () => {
    const nums = [9,-8]
    var obj = new NumArray(nums)
    obj.update(0, 3)
    expect(obj.sumRange(1, 1)).toBe(-8)
    expect(obj.sumRange(0, 1)).toBe(-5)
    obj.update(1, -3)
    expect(obj.sumRange(0, 1)).toBe(0)
})