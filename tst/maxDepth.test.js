const maxDepth = require("../src/maxDepth")

test("(1+(2*3)+((8)/4))+1", () => {
    const s = "(1+(2*3)+((8)/4))+1"
    expect(maxDepth(s)).toBe(3)
})

test("(1+(2*3)+((8)/4))+1", () => {
    const s = "(1)+((2))+(((3)))"
    expect(maxDepth(s)).toBe(3)
})