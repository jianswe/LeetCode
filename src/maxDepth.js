/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let depth = 0;
    for(let i=0; i<s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            if(stack.length > depth) {
                depth = stack.length;
            }
        } else if (s[i] === ")") {
            stack.pop();
        }
        
    }
    return depth; 
};

module.exports = maxDepth;