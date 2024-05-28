let tree = []

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function(nums, queries) {
    let ans = 0
    buildSegTree(nums, 0, 0, nums.length-1)

    for (const [pos, x] of queries) {
        updateSegTree(0, 0, nums.length-1, pos, x)
        ans += tree[0][3] > 0 ? tree[0][3] : 0
    }
    return ans % (10**9+7)
};

function buildSegTree(nums, i, l, r) {
    if(l===r) {
        tree[i] = [0, 0, 0, nums[l]] // NoLeft and NoRight, Noleft and Right, Left and NoRight, Left and Right
        return 
    }
    const m = Math.floor((l+r)/2)
    
    buildSegTree(nums, 2*i+1, l, m)
    buildSegTree(nums, 2*i+2, m+1, r)
    updateSegTreeNode(i)
}

function updateSegTree(i, l, r, pos, x) {
    if (l === r) {
        tree[i] = [0,0,0,x]
        return 
    }
    const m = Math.floor((l+r)/2)
    if(pos>m) updateSegTree(2*i+2, m+1, r, pos, x)
    else if (pos <= m) updateSegTree(2*i+1, l, m, pos, x)
    updateSegTreeNode(i)
}

function updateSegTreeNode(i) {
    tree[i] = []
    // parent NoLeft and NoRight = 
    // 1. left child NLnNR + right child LnNR OR 
    // 2. lc NLnR + rc NLnNR
    tree[i][0] = Math.max(tree[2*i+1][0] + tree[2*i+2][2], tree[2*i+1][1] + tree[2*i+2][0])
    // parent NoLeft and Right = 
    // 1. left child NLnNR + right child LnR OR 
    // 2. left child NLnR + right child NLnR
    tree[i][1] = Math.max(tree[2*i+1][0] + tree[2*i+2][3], tree[2*i+1][1] + tree[2*i+2][1])
    // parent LnNR = 
    // 1. lc LnNR + rc LnNR or 
    // 2. lc LnR + rc NLnNR
    tree[i][2] = Math.max(tree[2*i+1][2] + tree[2*i+2][2], tree[2*i+1][3] + tree[2*i+2][0])
    // parent LnR = 
    // 1. lc LnNR + rc LnR
    // 2. lc LnR + rc NLnR 
    tree[i][3] = Math.max(tree[2*i+1][2] + tree[2*i+2][3], tree[2*i+1][3] + tree[2*i+2][1])
}

module.exports = maximumSumSubsequence