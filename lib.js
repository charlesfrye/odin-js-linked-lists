const LinkedList = () => {
  let _head = null;

  // prepend(value) adds a new node containing value to the start of the list
  const prepend = (value) => {
    _head = Node(value, _head);
  };

  // head returns the first node in the list
  const head = () => {
    return _head;
  };

  // tail returns the last node in the list
  const tail = () => {
    let current = _head;
    while (current.hasNext()) {
      current = current.getNext();
    }
    return current;
  };

  // append(value) adds a new node containing value to the end of the list
  const append = (value) => {
    tail().setNext(Node(value));
  };

  // size returns the total number of nodes in the list
  const size = () => {
    let current = _head;
    let count = 0;
    while (current != null) {
      count += 1;
      current = current.getNext();
    }
    return count;
  };

  // at(index) returns the node at the given index, or null if it doesn't exist
  const at = (index) => {
    let current = _head;
    let count = 0;
    while (current != null) {
      if (count == index) {
        return current;
      }
      count += 1;
      current = current.getNext();
    }
    return null;
  };

  // pop removes the last element from the list and returns its value
  const pop = () => {
    let current = _head;
    if (current == null) {
      return undefined; // this is probably bad practice, should throw an error instead
    }
    let prev = null;
    while (current.hasNext()) {
      prev = current;
      current = current.getNext();
    }
    value = current.getValue();
    prev.setNext(null);
    return value;
  };

  // find(value) returns the index of the node containing value, or null if not found.
  const find = (value) => {
    let current = _head;
    let count = 0;
    while (current != null) {
      if (current.getValue() == value) {
        return count;
      }
      count += 1;
      current = current.getNext();
    }
    return null;
  };

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  const contains = (value) => {
    return find(value) != null;
  };

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console
  // The format is: ( value ) -> ... ( value ) -> null
  const toString = () => {
    let current = _head;
    let str = "";
    while (current != null) {
      str += `( ${current.getValue()} ) -> `;
      current = current.getNext();
    }
    str += "null";
    return str;
  };

  return {
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    head,
    tail,
    toString,
  };
};

const Node = (value = null, next = null) => {
  const getValue = () => value;
  const getNext = () => next;

  const setValue = (newValue) => (value = newValue);
  const setNext = (newNext) => (next = newNext);

  const hasNext = () => next != null;

  const node = { getValue, setValue, getNext, setNext, hasNext };

  node.toString = function () {
    return `Node: ${value}, Next: ${next}`;
  };

  return node;
};

// it's called test-driven development, look it up

ll = LinkedList();
ll.prepend(2);
ll.prepend(1);
ll.append(3);
console.log(ll.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> null
console.log(ll.head().toString()); // Node: 1, Next: Node: 2, Next: Node: 3, Next: null
console.log(ll.size()); // 3
console.log(ll.at(1).getValue()); // 2
console.log(ll.at(3)); // null
console.log(ll.pop()); // 3
console.log(ll.toString()); // ( 1 ) -> ( 2 ) -> null
console.log(LinkedList().pop()); // undefined
console.log(ll.find(2)); // 1
console.log(ll.find("foo")); // null
console.log(ll.contains(3)); // false
