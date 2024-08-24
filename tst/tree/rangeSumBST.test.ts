import rangeSumBST from "../../src/tree/rangeSumBST"
import BST from "js-dsa/src/BST"

test("Input: root = [10,5,15,3,7,null,18], low = 7, high = 15; Output: 32", () => {
    let bst = new BST()
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(18)
    expect(rangeSumBST(bst.root, 7, 15)).toBe(32) 
})