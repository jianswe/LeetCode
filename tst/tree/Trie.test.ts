import Trie from "../../src/tree/Trie"

test("insert, search, startsWith", () => {
    let trie: Trie = new Trie()
    trie.insert("apple")
    expect(trie.search("apple")).toBe(true)    // return True
    expect(trie.search("app")).toBe(false) // return False  
    expect(trie.startsWith("app")).toBe(true)  // return True
    trie.insert("app")
    expect(trie.search("app")).toBe(true)   // return True
})