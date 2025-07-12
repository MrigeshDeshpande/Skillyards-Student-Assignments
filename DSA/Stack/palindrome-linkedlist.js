/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

1->2->2->1

Input: head = [1,2,2,1]
Output: true

Example 2:

1->2

Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

Question : https://leetcode.com/problems/palindrome-linked-list/description/?envType=problem-list-v2&envId=stack
 
*/

/**
 * logic: 
 * 1. Use a stack to store the first half of the linked list.
 * 2. Traverse the linked list with two pointers (slow and fast) to find the middle.
 * 3. If the length is odd, skip the middle element.
 * 4. Compare the second half of the linked list with the elements popped from the stack.
 * 5. If all elements match, return true; otherwise, return false.
 */

function isPalindrome(head) {
    let slow = head;
    let fast = head;
    let stack = [];

    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = fast ? slow.next : slow;

    while (second) {
        if (stack.pop() !== second.val) return false;
        second = second.next;
    }

    return true;
}

/**
 * logic:
 * 1. Traverse the linked list and store the values in an array.
 * 2. Check if the array is a palindrome by comparing it with its reverse.
 * 3. If they are the same, return true; otherwise, return false.
 */

//Alterntive solution using reverse linked list:
function isPalindrome(head) {
    let values = [];
    
    // Step 1: Store values in an array
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    
    // Step 2: Check if the array is a palindrome
    return values.join('') === values.reverse().join('');
}