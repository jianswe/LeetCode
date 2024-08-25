import TreeNode from "./TreeNode"

function rangeSumBST(root: TreeNode | null, low: number, high: number): number { // 7 15 
    return dfs(root, low, high)
};

function dfs(node, low, high) { // 10, 7, 15  ; 5, 7, 15 ; 7, 7, 15 ； 15; 
    if (!node) return 0 

    let temp = 0 // 10 ; 7 
    temp += dfs(node.left, low, high)
    temp += node.val >= low && node.val <= high ? node.val : 0 
    temp += dfs(node.right, low, high)
    return temp 
}

export default rangeSumBST
