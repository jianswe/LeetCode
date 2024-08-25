import TreeNode from "./TreeNode"

function inorderTraversal(root: TreeNode | null): number[] {
    let stack: TreeNode[] = [], curr = root, ans = []
    while (curr || stack.length>0) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        ans.push(curr.val)
        curr = curr.right
    }
    return ans 
};

export default inorderTraversal