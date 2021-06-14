/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    this.head === null? this.head = newNode : this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
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

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return null;

    let current = this.head;
    const last = this.tail

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    while (current.next !== last) {
      current = current.next;
    }

    this.tail = current;
    this.tail.next = null;
    this.length--;

    return last.val;
  }

  /** shift(): return & remove first item. */

  shift() {
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

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx === NaN) return "Invalid Index";

    let current = this.head
    let i = 0;

    while (i < idx) {
      current = current.next;
      i++
    }

    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx === NaN) return "Invalid Index";

    let current = this.head;
    let i = 0;

    while (i < idx) {
      current = current.next;
      i++;
    }

    current.val = val;
    return current.val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === NaN) return "Invalid Index";

    let newNode = new Node(val)

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    let current = this.head;
    let i = 0;

    while (i < idx - 1) {
      current = current.next;
      i++;
    }

    const oldNode = current.next;
    current.next = newNode;
    if (current === this.head) this.head = newNode;

    oldNode === null ? this.tail = newNode : newNode.next = oldNode;
  
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === NaN) return "Error";
   

    if (this.length === 1) {
      let item = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return item;
    }

    let current = this.head;
    let i = 0;

    while (i < idx - 1) {
      current = current.next;
      i++;
    }

    let item = current.next;
    
    if(current === this.head) this.head = item
    current.next == current.next.next

    if (current.next === null) this.tail = current;
    item.next = null;

    this.length--;

    return item.val
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;

    let current = this.head

    while(current !== null) {
      total = total + current.val
      current = current.next;
    }

    let avg = total / this.length || 0
    return avg
  }
}

module.exports = LinkedList;
