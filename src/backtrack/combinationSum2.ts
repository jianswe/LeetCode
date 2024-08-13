// https://leetcode.com/problems/combination-sum-ii/
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a,b)=>a-b)
    let ansSet = new Set(), ans = [] 
    function backtrack(i, subset, sum) {
        if (sum > target) return 
        if (sum === target && !ansSet.has(subset.toString())) {
            ans.push(subset)
            ansSet.add(subset.toString())
            return 
        }
        if (i>=candidates.length) return  

        for (let j=i; j<candidates.length; j++) {
            if (j>i && candidates[j] === candidates[j-1]) continue 
            subset.push(candidates[j])
            backtrack(j+1, [...subset], sum+candidates[j])
            subset.pop()
        }
    }
    backtrack(0, [], 0)
    return ans 
};

export default combinationSum2