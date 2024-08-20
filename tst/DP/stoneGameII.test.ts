import stoneGameII from "../../src/DP/stoneGameII"

test("Input: piles = [2,7,9,4,4]; Output: 10", () => {
    const piles = [2,7,9,4,4]
    expect(stoneGameII(piles)).toBe(10)
})

test("Input: piles = [1,2,3,4,5,100]; Output: 104", () => {
    const piles = [1,2,3,4,5,100]
    expect(stoneGameII(piles)).toBe(104)
})