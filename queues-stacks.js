/** Node: node for a singly linked queue or stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained together nodes with FIFO implementation. */

class Queue {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.enqueue(val);
  }

  /** push(val): add new value to end of queue. */

  enqueue(val) {
    const newNode = new Node(val)
    this.head === null ? this.head = newNode : this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** dequeue(): return & remove first item. */
  dequeue() {
    if (this.length === 0) throw new Error("No more items in queue");

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
    }

    this.length--;

    return oldHead.val;
  }

  /** peek(): return 1st item in queue */
  peek() {
    return this.head;
  }

  /** isEmpty(): return true if empty, or false if items still in queue */
  isEmpty() {
    return (this.length === 0);
  }

}

/** Stack: chained together nodes with LIFO implementation */

class Stack {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to top of stack. */

  push(val) {
    const newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
  }

  /** pop(): return & remove first item on top of stack. */

  shift() {
    if (this.length === 0) throw new Error("No more items in queue");

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
    }

    this.length--;

    return oldHead.val;
  }

  /** peek(): return 1st item in queue */
  peek() {
    return this.head;
  }

  /** isEmpty(): return true if empty, or false if items still in queue */
  isEmpty() {
    return (this.length === 0);
  }

}