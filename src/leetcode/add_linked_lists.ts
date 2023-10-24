// https://leetcode.com/problems/add-two-numbers/
// Definition for singly-linked list.
  class ListNode {
      val: number
     next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }

function traverse_linked_list(pointer: ListNode) {
  if (pointer.next) {
    return [pointer.val, ...traverse_linked_list(pointer.next)]
  } else return [pointer.val]
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let counter = 0
  let p1 = l1
  let p2 = l2
  if (p1 === null) return null
  if (p2 === null) return null
  let curNode: ListNode | null =  null
  let firstNode
  let carry = false

  while (true) {
    console.log(`p1: ${p1.val} ${p1.next === null}, p2: ${p2.val}, ${p2.next === null}`)
    console.log(counter)
    let val = p1.val + p2.val
    if (carry)  { 
      console.log('carrying out the carry')
      val += 1 
      carry = false 
    }
    if (curNode === null) {
      curNode = new ListNode(val, null)
      firstNode = curNode
    } else {
      const newNode = new ListNode(val, null)
      curNode.next = newNode
      curNode = newNode
    }
    if (val >= 10) {
      curNode.val = val - 10
      carry = true
      console.log('carrying: ', curNode.val)
    }

    p1 = p1.next
    p2 = p2.next
    console.log('after following pointer')
    console.log(`p1: ${p1 ? p1.val : null}  ${p1 ? p1.next : null}, p2: ${p2 ? p2.val : null}, ${p2 ? p2.next : null}`)
    if (p1 === null) break;
    if (p2 === null) break;
    counter += 1
    console.log()
  }

  if (p1 && p2 === null) curNode.next = p1
  if (p2 && p1 === null) curNode.next = p2
  curNode = curNode.next
  while (true) {
    if (carry) { 
      curNode.val += 1
      if (curNode.val > 9) {
        curNode.val = curNode.val - 10
        carry = true
      }
      else carry = false
    }

    if (!curNode.next) {
      if (carry) {
        curNode.next = new ListNode(1, null)
        break
      }
    } else {
      curNode = curNode.next
    }
  }

  return firstNode
}

 function addTwoNumbersListNode(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const nodes: ListNode[] = []
  let p1 = l1
  let p2 = l2
  let cur = l1
  while (true) {
    console.log(`p1: ${p1.val} ${p1.next === null}, p2: ${p2.val}, ${p2.next === null}`)
    const val = p1.val + p2.val
    nodes.push(new ListNode(val, null))
    p1 = p1.next
    p2 = p2.next
    if (p1 === null) break;
    if (p2 === null) break;
  }


  const lastNode = nodes[nodes.length - 1]
  if (p1) lastNode.next = p1
  if (p2) lastNode.next = p2

  nodes.forEach((n, i) => {
    if (nodes[i + 1]) {
      n.next = nodes[i + 1]
    }
  })
  // console.log('nodes hooked up')
  // console.dir(nodes)

  let pointer: ListNode | null = nodes[0]
  while (true) {
    if (pointer.val >= 10){
      console.log('pointer.val exceeds 10')
      pointer.val = pointer.val - 10
      if (pointer.next === null) {
        console.log('pointer.next is null, this is the money moment')
        pointer.next = new ListNode(1, null)
      } else {
        pointer.next.val = pointer.next.val + 1
      }
    }
    pointer = pointer.next
    if (pointer === null) break;
  }

  return nodes[0]
};


function addTwoNumbersWithString(l1: ListNode | null, l2: ListNode | null) {
  if (!l1 && l2) return l2
  if (!l2 && l1) return l1
  if (!l1 && !l2) return null
  const num1 = Number(traverse_linked_list(l1 as ListNode).reverse().join('') )
  const num2 = Number(traverse_linked_list(l2 as ListNode).reverse().join('') )

  console.log(num1)
  console.log(num2)
  const num3 = num1 + num2 
  console.log(num3)
  const digits = String(num3).split('').reverse()
  const node = new ListNode(Number(digits[0]), null)
  let curNode = node
  digits.forEach((d, i) => {
    if (i > 0) {
      const newNode = new ListNode(Number(d), null)
      curNode.next = newNode
      curNode = newNode
    } 
  })
  return node
}


/*

Memory
Details
48.07MB
Beats 68.73%of users with TypeScript

Runtime
Details
91ms
Beats 79.18%of users with TypeScript
*/
function addTwoNumbersMemoryEfficient(l1: ListNode | null, l2: ListNode | null) {
  let p1 = l1
  let p2 = l2
  let cur = l1
  let first = p1
  let carry = false

  while (true) {
    let val = p1.val + p2.val
    if (carry) {
      val += 1
      carry = false
    }
    p1 = p1.next
    p2 = p2.next
    cur.val = val
    if (val >= 10) {
      cur.val = val - 10
      carry = true
    }
    if (p2 === null) {
      break;
    }
    if (p1 === null) { 
      cur.next = p2
      break;
    } else {

      cur = p1
    }
    
  }

  if (cur.next) {
    cur = cur.next
    while (true) {
      if (carry) {
        cur.val += 1
        carry = false
      }
      if (cur.val >= 10) {
        cur.val = cur.val - 10
        carry = true
      }
      if (cur.next) {
        cur = cur.next
      } else {
        if (carry) {
          cur.next = new ListNode(1, null)
        }
        break;
      }

    }
  } else {
    if (carry) {
      cur.next = new ListNode(1, null)
    }
  }
  return first
}

// 2, 4, 3
// 5, 6, 4
const node1_0 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
const node2_0 = new ListNode(5, new ListNode(6, new ListNode(4, null)))

const node3_0 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))
const node4_0 = new ListNode(9, 
  new ListNode(9, 
    new ListNode(9, 
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))))

const node5_0 = new ListNode(5, null)
const node6_0 = new ListNode(5, null)

// addTwoNumbers(node1_0, node2_0)
const firstLongNode = new ListNode(1, null)
let curLongNode = firstLongNode
const long_nodes = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].map((d, i) => {
  if (i > 0) {
    curLongNode.next = new ListNode(d, null)
    curLongNode = curLongNode.next
  } 
})

const res = addTwoNumbersMemoryEfficient(node3_0, node4_0)
console.log(traverse_linked_list(res))
const res2 = addTwoNumbersMemoryEfficient(node1_0, node2_0)
console.log(traverse_linked_list(res2))
const res3 = addTwoNumbersMemoryEfficient(node5_0, node6_0)
console.log(traverse_linked_list(res3))