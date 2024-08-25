import BST from "js-dsa/src/BST"
import insertIntoBST from "../../src/tree/insertIntoBST"
import inorderTraversal from "../../src/tree/inorderTraversal"

test("Input: root = [4,2,7,1,3], val = 5; Output: [4,2,7,1,3,5]", () => {
    const expected = [1,2,3,4,5,7]
    let root = insertIntoBST(null, 4)
    insertIntoBST(root, 7)
    insertIntoBST(root, 1)
    insertIntoBST(root, 2)
    insertIntoBST(root, 3)
    insertIntoBST(root, 5)
    const nums = inorderTraversal(root)
    expect(nums.length).toBe(6)
    for (let i=0; i<nums.length; i++) {
        expect(nums[i]).toBe(expected[i])
    }
})