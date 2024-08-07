import candy from "../../src/array/candy"

test("Input: ratings = [1,0,2]; Output: 5", () => {
    const ratings = [1,0,2]
    expect(candy(ratings)).toBe(5)
})

test("Input: ratings = [1,2,2]; Output: 4", () => {
    const ratings = [1,2,2]
    expect(candy(ratings)).toBe(4)
})

test("Continuous desc ratings should be updated", () => {
    const ratings = [1, 0, 2, 1, 0]
    expect(candy(ratings)).toBe(9)
})

test("Corner case: It's possible candies[i] is already greater than candies[i+1]", () => {
    const ratings = [1,3,4,5,2]
    expect(candy(ratings)).toBe(11)
})

test("Corner case: It's possible candies[j] is already greater than candies[j+1]", () => {
    const ratings = [0,1,2,3,2,1]
    expect(candy(ratings)).toBe(13)
})