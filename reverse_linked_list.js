class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// console.log(node1);

const reverseList = (head) => {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev
    prev = head
    head = next
  }
  return prev; 
}

console.log(reverseList(node1));