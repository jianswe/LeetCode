import minDays from "../../src/graph/minDays"

test("Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]; Output: 2", () => {
    const grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
    expect(minDays(grid)).toBe(2)
})

test("Input: grid = [[1,1]]; Output: 2", () => {
    const grid = [[1,1]]
    expect(minDays(grid)).toBe(2)
})