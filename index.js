/**
 * Linked List
 */

const Node = (value = null, next = null) => {
  return {
    value,
    next
  }
}

const LinkedList = () => {
  let head = null
  let tail = null
  let size = 0

  /**
   * insertFirstNode.
   * Insert a node in an empty linked list
   * @param {Node} node
   *
   * Time complexity: O(1)
   */
  const insertFirstNode = (node) => {
    head = node
    tail = head
    size++
  }

  /**
   * append.
   * Add a new node to the end of the list.
   * @param {} value
   *
   * Time complexity: O(1)
   */
  const append = (value) => {
    const node = Node(value)
    if (isEmpty()) return insertFirstNode(node)
    tail.next = node
    tail = node
    size++
  }

  /**
   * prepend.
   * Adds a new node to the start to the list
   * @param {} value
   */
  const prepend = (value) => {
    const node = Node(value)
    if (isEmpty()) return insertFirstNode(node)
    node.next = head
    head = node
    size++
  }

  /** TODO:
   * pop
   * shift
   * at(index)
   * contains(value)
   * find(value)
   * insertAt(value, index)
   * removeAt(index)
   * /

  /**
   * isEmpty.
   * Check if the linked list is empty.
   * @returns {Boolean}
   *
   * Time complexity: O(1)
   */
  const isEmpty = () => size === 0

  /**
   * getSize.
   * Get the number of nodes in the linked list
   * @returns {Number}
   *
   * Time complexity: O(1)
   */
  const getSize = () => size

  /**
   * getHead.
   * Return the head node
   *
   * Time complexity: O(1)
   */
  const getHead = () => head.value

  /**
   * getTail.
   * Return the tail node
   *
   * Time complexity: O(1)
   */
  const getTail = () => tail.value

  /**
   * toString.
   * Represent Linked List as a string: it can be printed in console.
   *
   * Time complexity: O(n)
   */
  const toString = () => {
    let curr = head
    let str = ''
    while (curr) {
      str += `(${curr.value}) -> `
      curr = curr.next
    }

    str += 'null'

    return str
  }

  return {
    append,
    prepend,
    isEmpty,
    getSize,
    getHead,
    getTail,
    toString
  }
}

// Test
const ll = LinkedList()
console.log('---------------------------------')
console.log(`Linked list is empty? ${ll.isEmpty()}.`)
console.log(
  `In the Linked List there ${
    ll.getSize() === 1 ? 'is 1 node.' : `are ${ll.getSize()} nodes.`
  }`
)
console.log('---------------------------------')
console.log('APPEND AT THE END')
ll.append(40)
console.log(`The head value is ${ll.getHead()}`)
console.log(`The tail value is ${ll.getTail()}`)
ll.append(15)
console.log(`The head value is ${ll.getHead()}`)
console.log(`The tail value is ${ll.getTail()}`)
ll.append(6)
console.log(`The head value is ${ll.getHead()}`)
console.log(`The tail value is ${ll.getTail()}`)
console.log('---------------------------------')
console.log(
  `In the Linked List there ${
    ll.getSize() === 1 ? 'is 1 node.' : `are ${ll.getSize()} nodes.`
  }`
)
console.log(ll.toString())
console.log('---------------------------------')
console.log('PREPEND AT THE BEGINNING')
ll.prepend(4)
console.log(`The head value is ${ll.getHead()}`)
console.log(`The tail value is ${ll.getTail()}`)
ll.prepend(18)
console.log(`The head value is ${ll.getHead()}`)
console.log(`The tail value is ${ll.getTail()}`)
ll.prepend(74)
console.log(`The head value is ${ll.getHead()}`)
console.log(`The tail value is ${ll.getTail()}`)
console.log('---------------------------------')
console.log(
  `In the Linked List there ${
    ll.getSize() === 1 ? 'is 1 node.' : `are ${ll.getSize()} nodes.`
  }`
)
console.log(ll.toString())
console.log(`Linked list is empty? ${ll.isEmpty()}.`)
console.log('---------------------------------')
