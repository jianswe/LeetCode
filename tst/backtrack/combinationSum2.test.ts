import combinationSum2 from "../../src/backtrack/combinationSum2"

test("Input: candidates = [10,1,2,7,6,1,5], target = 8", () => {
    const candidates = [10,1,2,7,6,1,5], target = 8
    const output = [
        [1,1,6],
        [1,2,5],
        [1,7],
        [2,6]
    ]
    expect(combinationSum2(candidates, target)).toStrictEqual(output)            
})

test("Input: candidates = [2,5,2,1,2], target = 5", () => {
    const candidates = [2,5,2,1,2], target = 5
    const output = [
        [1,2,2],
        [5]
    ]
    expect(combinationSum2(candidates, target)).toStrictEqual(output)       
})

test("Time Limit Exceeded", () => {
    const candidates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    const target = 30 
    const output = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
    expect(combinationSum2(candidates, target)).toStrictEqual(output)
})