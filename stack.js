/**
 * Exercise 2 — Valid Parentheses (stack)
 *
 * Problem:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * A string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 *
 * Run:
 *   node exercises/ex2-valid-parentheses.js
 */

function isValidParentheses(s) {
  // TO DO:

  // 1) Create an empty stack array
  const stack = [];

  // 2) Create a map of closing->opening brackets: { ')':'(', ']':'[', '}':'{' }
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

  // 3) Iterate through characters:
  for (let char of s) {


  //    - if it's an opening bracket, push to stack
    if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
    }


  //    - if it's a closing bracket:
    else if (char === ')' || char === ']' || char === '}') {
 

  //        - pop last opening
        const lastOpening = stack.pop();

  //        - check if it matches the expected opening from the map
        if (lastOpening !== bracketMap[char]) {
            return false;
        }

  //        - if it doesn't match, return false

     if (lastOpening !== bracketMap[char]) {
        return false;
      }
    }
  }


  // 4) At the end, string is valid if stack is empty
  return stack.length === 0;
  

}

const tests = [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
  { input: "(((", expected: false }
];

console.log("\n=== Valid Parentheses Tests ===");
for (const { input, expected } of tests) {
  const result = isValidParentheses(input);
  console.log(`${input.padEnd(8)} => ${String(result).padEnd(5)} (expected ${expected})`);
}




