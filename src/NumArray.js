/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.size = nums.length 
    this.tree = []
    function buildSegTree(treeIndex, lo, hi) {
        if(lo === hi) {
            this.tree[treeIndex] = nums[lo]
            return 
        }
        const mid = Math.floor((lo+hi)/2) 
        
        buildSegTree.call(this, 2*treeIndex+1, lo, mid)
        buildSegTree.call(this, 2*treeIndex+2, mid+1, hi)
        this.tree[treeIndex] = this.tree[2*treeIndex+1] + this.tree[2*treeIndex+2]
    }
    buildSegTree.call(this, 0, 0, this.size-1)
    // console.log(this.tree)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    function updateValSegTree(treeIndex, lo, hi, index, val) {
        if(lo === hi) { // leaf node. update element.
            this.tree[treeIndex] = val
            return 
        }
        const mid = Math.floor((lo + hi) / 2)  // recurse deeper for appropriate child
        if(index > mid) updateValSegTree.call(this, 2*treeIndex+2, mid+1, hi, index, val)
        else if (index <= mid) updateValSegTree.call(this, 2*treeIndex+1, lo, mid, index, val)

        this.tree[treeIndex] = this.tree[2*treeIndex+1] + this.tree[2*treeIndex+2]
    }
    updateValSegTree.call(this, 0, 0, this.size-1, index, val)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    function querySegTree(treeIndex, lo, hi, left, right) {
        if(lo > right || hi < left) return 0 // segment completely outside range
        if(left <= lo && right >= hi) return this.tree[treeIndex]
        const mid = Math.floor((lo+hi)/2) 
        if (left > mid) {
            return querySegTree.call(this, 2*treeIndex+2, mid+1, hi, left, right)
        } else if (right <= mid) {
            return querySegTree.call(this, 2*treeIndex+1, lo, mid, left, right)
        }
        const leftQuery = querySegTree.call(this, 2*treeIndex+1, lo, mid, left, mid)
        const rightQuery = querySegTree.call(this, 2*treeIndex+2, mid+1, hi, mid+1, right)
        return leftQuery+rightQuery
    }
    return querySegTree.call(this, 0, 0, this.size-1, left, right)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

module.exports = NumArray