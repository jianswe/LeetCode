function stoneGameII(piles: number[]): number {
    const N = piles.length
    let M = 1
    let i = 0
    while (i<=N) {
        let j=0
        while (j<=2*M) {
            j++
            i++
        }
        M=2*M
    }

    let memo = new Array(N).fill(null).map(() => new Array(M+1).fill(-1))
    let suffixSum = new Array(N)
    suffixSum[N-1] = piles[N-1]
    for (let i=N-2; i>=0; i--) {
        suffixSum[i] = suffixSum[i+1] + piles[i]
    }
    // console.log(suffixSum)

    // the states are (i, m) for the answer of piles[i:] and that given m.
    function dp(i, m) {
        if (memo[i][m] !== -1) return memo[i][m]
        // if (i===piles.length-1) return piles[i]
        // if (i===piles.length-2) return piles[i]+piles[i+1]
        // If the current index plus twice the m exceeds the array size, take all remaining stones
        if (i+2*m >= N) {  
            memo[i][m] = suffixSum[i]
            return memo[i][m]
        }

        let opponentStones = Infinity
        // Simulating how the current player comes up with the optimum solution based on what we have remaining on the table. 
        // Calculate the possible minimum result for your opponent.  
        for (let j=1; j<=2*m; j++) { // j is the number of piles current player may take 
            const nextM = Math.max(m, j)
            if (i+j < N) opponentStones = Math.min(opponentStones, dp(i+j, nextM)) 
        }
        memo[i][m] = suffixSum[i] - opponentStones
        return memo[i][m]
    }
    let ans = dp(0, 1)
    // console.log(memo)
    return ans 
};

export default stoneGameII