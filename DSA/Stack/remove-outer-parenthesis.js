/**
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
 

Constraints:

1 <= s.length <= 105
s[i] is either '(' or ')'.
s is a valid parentheses string.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
490,006/572.7K
Acceptance Rate
85.6%

Question Link: https://leetcode.com/problems/remove-outermost-parentheses/description/?envType=problem-list-v2&envId=stack
 */

//logic:
// 1. Use a stack to keep track of the parentheses.
// 2. For each character in the string, if it's an opening parenthesis '(',
//    check if the stack is empty. If it is not, append it to the result.
// 3. Push the character onto the stack.
//4. If it's a closing parenthesis ')', pop from the stack and check if the stack is empty.
//    If it is not empty, append the character to the result.
// 5. Return the result string after processing all characters.
// 6. This effectively removes the outermost parentheses from each primitive string.
// 7. The time complexity is O(n) where n is the length of the string.
// 8. The space complexity is O(n) for the result string and the stack.
function removeOuterParentheses(s) {
    const stack = [];
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length > 0) result += s[i]; 
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length > 0) result += s[i]; 
        }
    }

    return result;
}
console.log(removeOuterParentheses("(()())(())")); // Output: "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // Output: "()()()()(())"
console.log(removeOuterParentheses("()()")); // Output: ""