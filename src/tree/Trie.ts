// https://leetcode.com/problems/implement-trie-prefix-tree

class TrieNode {
    val: string 
    isWord: boolean
    children: Map<string, TrieNode>
    constructor(val) {
        this.val = val 
        this.isWord = false
        this.children = new Map()
    }
}

class Trie {
    root: TrieNode
    
    constructor() {
        this.root = new TrieNode('')
    }

    insert(word: string): void {
        let cur = this.root, val = ""
        for (const ch of word) {
            if(!cur.children.has(ch)) {
                val += ch
                cur.children.set(ch, new TrieNode(val))
            }
            cur = cur.children.get(ch)
        }
        cur.isWord = true 
    }

    search(word: string): boolean {
        let cur = this.root 
        for (const ch of word) {
            if(!cur.children.has(ch)) {
                return false 
            }
            cur = cur.children.get(ch)
        }
        return cur.isWord
    }

    startsWith(prefix: string): boolean {
        let cur = this.root
        for (const ch of prefix) {
            if(!cur.children.has(ch)) {
                return false 
            }
            cur = cur.children.get(ch)
        }
        return true 
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie