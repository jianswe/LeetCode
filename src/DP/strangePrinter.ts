function strangePrinter(s: string): number { 
    const N = s.length
    let indices = new Map()
    for (let i=0; i<N; i++) {
        if (indices.has(s[i])) indices.get(s[i]).push(i)
        else indices.set(s[i], [i])
    }
    let print = new Array(N).fill('')
    let memo = new Array(N).fill(null).map(() => new Array(N).fill(-1))
    function dp(left, right) { 
        if (left > right) return 0
        if (memo[left][right] !== -1) return memo[left][right]
        if (print[left] === s[left]) {
            memo[left][right] = dp(left+1, right)
            return memo[left][right]
        }
        if (left===right) {
            memo[left][right] = 1 
            return memo[left][right]
        } 
        let indArr = indices.get(s[left]) 
        indArr = indArr.filter(ind => ind>=left && ind<=right)
        let temp = Infinity 
        indArr.shift() // remove the first index since we will remove it with left+1

        print.splice(left, 1, s[left])
        temp = Math.min(temp, 1 + dp(left+1, right)) 
        
        for (let i=0; i<indArr.length; i++) {
            const [ind] = indArr.splice(i, 1)
            const count = ind - left + 1
            const replace = new Array(count).fill(s[left])
            const replaced = print.splice(left, count, ...replace)
            temp = Math.min(temp, 1 + dp(left+1, ind-1) + dp(ind+1, right)) 
            indArr.splice(i, 0, ind)
            print.splice(left, count, ...replaced)
        }
        memo[left][right] = temp
        return memo[left][right]
    }
    return dp(0, N-1) 
};

export default strangePrinter