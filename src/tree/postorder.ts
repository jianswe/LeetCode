/**
 * Definition for node.
 */
export class _Node {
    val: number
    children: _Node[]
    constructor(val?: number) {
        this.val = (val===undefined ? 0 : val)
        this.children = []
    }
}

function postorder(root: _Node | null): number[] {
    if (!root) return []
    let ans: number[] = []
    for (const child of root.children) {
        ans.push(...postorder(child))
    }
    ans.push(root.val)
    return ans 
};

export default postorder