import TreeNode from "./TreeNode"

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val)
    let cur = root
    while(cur) {
        if (cur.val < val) {
            if (cur.right) {
                cur = cur.right
            } else {
                cur.right = new TreeNode(val)
                break
            }
        } else {
            if (cur.left) {
                cur = cur.left
            } else {
                cur.left = new TreeNode(val)
                break
            }
        }
    }
    return root
};

export default insertIntoBST