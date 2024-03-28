/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 1) return tokens.pop();
    let stack = [];
    const operators = ['+', '-', '*', '/'];
    stack.push(tokens.pop()); // the last token must be an operator
    while (stack.length > 0) { 
        stack.push(tokens.pop());
        let leftOperand = tokens[tokens.length-1];
        let rightOperand = stack[stack.length-1];
        while (stack.length > 0 && !operators.includes(leftOperand) && !operators.includes(rightOperand)) { // both operands are numbers 
            // console.log("tokens: ", tokens)
            // console.log("stack: ", stack)
            leftOperand = parseInt(tokens.pop());
            rightOperand = parseInt(stack.pop());
            operator = stack.pop();
            let subResult = 0; 
            switch (operator) {
                case '+':
                    subResult = leftOperand + rightOperand;
                    break;
                case '-':
                    subResult = leftOperand - rightOperand;
                    break;
                case '*':
                    subResult = leftOperand * rightOperand;
                    break;
                case '/':
                    const tempResult = leftOperand / rightOperand;
                    if (tempResult < 0) {
                        subResult = 0 - Math.floor(0 - tempResult); 
                    } else {
                        subResult = Math.floor(tempResult);
                    }
                    break;
            }
            tokens.push(subResult);
            leftOperand = tokens[tokens.length-1];
            rightOperand = stack[stack.length-1];
        }
    }
    
    return tokens.pop();
};

module.exports = evalRPN;