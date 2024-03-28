const evalRPN = require('../src/evalRPN')

test('((2 + 1) * 3) = 9', () => {
    const tokens = ["2","1","+","3","*"]
    expect(evalRPN(tokens)).toBe(9)
})

test('(4 + (13 / 5)) = 6', () => {
    const tokens = ["4","13","5","/","+"]
    expect(evalRPN(tokens)).toBe(6)
})

test('((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22', () => {
    const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    expect(evalRPN(tokens)).toBe(22)
})