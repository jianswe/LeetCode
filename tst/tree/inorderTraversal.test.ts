import TreeNode from "../../src/tree/TreeNode"
import insertIntoBST from "../../src/tree/insertIntoBST"
import inorderTraversal from "../../src/tree/inorderTraversal"


test("Input: root = [1,null,2,3]; Output: [1,3,2]", () => {
    const expected = [1,2,3]
    let root = insertIntoBST(null, 1)
    insertIntoBST(root, 2)
    insertIntoBST(root, 3)
    const nums = inorderTraversal(root)
    expect(nums.length).toBe(3)
    for (let i=0; i<nums.length; i++) {
        expect(nums[i]).toBe(expected[i])
    }
})