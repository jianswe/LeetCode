function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length
    let remain:number[] = []
    for (let i=0; i<n; i++) {
        remain.push(gas[i]-cost[i])
    }
    const leftOver = remain.reduce((sum, val)=>sum+val, 0)
    if (leftOver<0) return -1
    let remainSum = new Array(n), minRemainSum = remain[0], ans = 0
    remainSum[0] = remain[0]
    for (let i=1; i<n; i++) {
        remainSum[i] = remainSum[i-1] + remain[i]
        // >= because we want to start after the last min
        // otherwise we could possibly start from a euqal min (we want to start after min)
        if (minRemainSum>=remainSum[i]) { 
            minRemainSum = remainSum[i]
            ans = i
        }
    }
    // console.log(remainSum)
    return (ans+1)%n // don't forget to %n in case of starting from 0 (ans+1 == n)
};

export default canCompleteCircuit