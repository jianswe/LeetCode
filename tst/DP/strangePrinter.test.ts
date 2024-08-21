import strangePrinter from "../../src/DP/strangePrinter"

test('Input: s = "aaabbb"; Output: 2', () => {
    const s = "aaabbb"
    expect(strangePrinter(s)).toBe(2)
})

test('Input: s = "aba"; Output: 2', () => {
    const s = "aba"
    expect(strangePrinter(s)).toBe(2)
})

test('Input: s = "abcabc"; Output: 5', () => {
    const s = "abcabc"
    expect(strangePrinter(s)).toBe(5)
})

test('Input: s = "abcabcabc"; Output: 7', () => {
    const s = "abcabcabc"
    expect(strangePrinter(s)).toBe(7)
})

test('Input: s = "tbgtgb"; Output: 4', () => {
    const s = "tbgtgb"
    expect(strangePrinter(s)).toBe(4)
})