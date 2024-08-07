function candy(ratings: number[]): number {
    const n = ratings.length
    let candies = new Array(n).fill(1)
    for (let i=0; i<n; i++) {
        if(i-1>=0 && ratings[i]>ratings[i-1]) candies[i] = candies[i-1]+1
        if(i+1<n && ratings[i]>ratings[i+1]) {
            // it's possible candies[i] is already greater than candies[i+1]
            candies[i] = Math.max(candies[i], candies[i+1]+1) 
            for (let j=i-1; j>=0; j--) { // we need to track back to the prev continuous desc ratings
                if (ratings[j]>ratings[j+1]) {
                    // same here, it's possible candies[j] is already greater than candies[j+1]
                    candies[j] = Math.max(candies[j], candies[j+1] + 1)
                } else {
                    break
                }
            }
        }
    }
    // console.log(candies)
    return candies.reduce((sum, val)=>sum+val, 0)
};

export default candy