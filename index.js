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

  /**
   * removeOneNode.
   * Remove node in a size 1 linked list
   */
  const removeOneNode = () => {
    head = null
    tail = null
    size--
  }

  /**
   * pop.
   * Removes the last element from the list
   *
   * Time complexity: O(n)
   */
  const pop = () => {
    if (isEmpty()) return

    if (size === 1) return removeOneNode()

    let prev = head

    while (prev.next && prev.next !== tail) {
      prev = prev.next
    }

    prev.next = null
    tail = prev
    size--
  }

  /**
   * shift.
   * Remove the first element from the list
   *
   * Time complexity: O(1)
   */
  const shift = () => {
    if (isEmpty()) return

    if (size === 1) return removeOneNode()

    head = head.next
    size--
  }

  /**
   * at.
   * Return the node value at given index
   * @param {Number} index
   *
   * Time complexity: O(n)
   */
  const at = (index) => {
    if (isEmpty()) return 'List is empty'

    if (index < 0 || index > size) return 'Invalid index'

    for (let i = 1, curr = head; i <= size; i++, curr = curr.next)
      if (i === index) return curr.value

    return 'Invalid Index'
  }

  /**
   * contains.
   * Returns true if parmeter is in the list otherwise returns false
   * @param {} value
   *
   * Time complexity: O(n)
   */
  const contains = (value) => {
    if (isEmpty()) return false

    let curr = head
    while (curr) {
      if (curr.value === value) return true
      curr = curr.next
    }

    return false
  }

  /**
   * find.
   * Returns the index of the node containing value, or null if not found
   * @param {} value
   *
   * Time complexity: O(n)
   *
   */
  const find = (value) => {
    if (isEmpty()) return null

    for (let i = 1, curr = head; i <= size; i++, curr = curr.next)
      if (curr.value === value) return i

    return null
  }

  /** TODO:
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
    pop,
    shift,
    at,
    contains,
    find,
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
console.log('POP THE LAST ELEMENT - EMPTY LIST')
ll.pop()
console.log(ll.toString())
console.log('---------------------------------')
console.log('SHIFT THE FIRST ELEMENT - EMPTY LIST')
ll.shift()
console.log(ll.toString())
console.log('---------------------------------')
console.log('POP THE LAST ELEMENT - LIST SIZE 1')
ll.append(12000)
console.log(ll.toString())
ll.pop()
console.log(ll.toString())
console.log('---------------------------------')
console.log('SHIFT THE FIRST ELEMENT - LIST SIZE 1')
ll.append(12000)
console.log(ll.toString())
ll.shift()
console.log(ll.toString())
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
console.log('RETURN THE NODE AT GIVEN INDEX')
console.log(`At index 1 there is value ${ll.at(1)}`)
console.log(`At index 2 there is value ${ll.at(2)}`)
console.log(`At index 3 there is value ${ll.at(3)}`)
console.log(`At index 4 there is value ${ll.at(4)}`)
console.log(`At index 5 there is value ${ll.at(5)}`)
console.log(`At index 6 there is value ${ll.at(6)}`)
console.log(ll.toString())
console.log(`Index -9: ${ll.at(-9)}`)
console.log(`Index 36: ${ll.at(36)}`)
console.log(`Index A: ${ll.at('A')}`)
console.log('---------------------------------')
console.log('POP THE LAST ELEMENT')
ll.pop()
console.log(`The tail value is ${ll.getTail()}`)
console.log(ll.toString())
ll.pop()
console.log(`The tail value is ${ll.getTail()}`)
console.log(ll.toString())
console.log('---------------------------------')
console.log('SHIFT THE FIRST ELEMENT')
ll.shift()
console.log(`The head value is ${ll.getHead()}`)
console.log(ll.toString())
ll.shift()
console.log(`The head value is ${ll.getHead()}`)
console.log(ll.toString())
console.log('---------------------------------')
console.log('CONTAINS THE ELEMENT')
console.log(ll.toString())
console.log(`The list contains 4? ${ll.contains(4)}`)
console.log(`The list contains 40? ${ll.contains(40)}`)
console.log(`The list contains 74? ${ll.contains(74)}`)
console.log(`The list contains 18? ${ll.contains(18)}`)
console.log('---------------------------------')
console.log('FIND THE INDEX OF THE ELEMENT')
console.log(ll.toString())
console.log(`The index of value 4:  ${ll.find(4)}`)
console.log(`The index of value 40:  ${ll.find(40)}`)
console.log(`The index of value 74:  ${ll.find(74)}`)
console.log(`The index of value 18:  ${ll.find(18)}`)
console.log('---------------------------------')
