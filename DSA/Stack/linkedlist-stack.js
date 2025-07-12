class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    /* Code Flow
       1. Initialize the stack with a head pointer set to null.
    */
    constructor() {
        this.head = null;
    }

/* Code Flow
   1. Create a new node with the given item.
   2. Set the new node's next pointer to the current head.
   3. Update the head to be the new node.
*/
    push(item) {
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
    }

/* Code Flow
   1. Check if the stack is empty (head is null).
   2. If empty, return null.
   3. If not empty, store the head value and update head to the next node.
*/
    pop() {
        if (!this.head) return null;
        const poppedValue = this.head.value;
        this.head = this.head.next;
        return poppedValue;
    }

/* Code Flow
   1. Check if the stack is empty (head is null).
   2. If empty, return null.
   3. If not empty, return the head value.
*/
    peek() {
        return this.head ? this.head.value : null;
    }

/* Code Flow
   1. Check if the stack is empty (head is null).
   2. If empty, return null.
   3. If not empty, return the head value.
*/
    isEmpty() {
        return this.head === null;
    }
}