import insertIntoBST from '../../src/tree/insertIntoBST'
import rangeSumBST from "../../src/tree/rangeSumBST"

test("Input: root = [10,5,15,3,7,null,18], low = 7, high = 15; Output: 32", () => {
    let root = insertIntoBST(null, 10)
    insertIntoBST(root, 5)
    insertIntoBST(root, 15)
    insertIntoBST(root, 3)
    insertIntoBST(root, 7)
    insertIntoBST(root, 18)
    expect(rangeSumBST(root, 7, 15)).toBe(32) 
})