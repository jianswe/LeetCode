import postorder, { _Node } from "../../src/tree/postorder"

test("Input: root = [1,null,3,2,4,null,5,6]; Output: [5,6,3,2,4,1]", () => {
    let root = new _Node(1)
    root.children = [
        new _Node(3),
        new _Node(2),
        new _Node(4)
    ]
    root.children[0].children = [
        new _Node(5),
        new _Node(6)
    ]
    const expected = [5,6,3,2,4,1]
    const nums = postorder(root)
    expect(nums.length).toBe(6)
    for (let i=0; i<nums.length; i++) {
        expect(nums[i]).toBe(expected[i])
    }
})