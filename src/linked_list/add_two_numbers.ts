import { ListNode } from "./helpers"

 
function traverse_linked_list(pointer: ListNode) {
  if (pointer.next) {
    return [pointer.val, ...traverse_linked_list(pointer.next)]
  } else return [pointer.val]
}


export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const nodes: ListNode[] = []
  let p1 = l1
  let p2 = l2
  if (p1 === null) return null
  if (p2 === null) return null
  while (true) {
    console.log(`p1: ${p1.val} ${p1.next === null}, p2: ${p2.val}, ${p2.next === null}`)
    const val = p1.val + p2.val
    nodes.push(new ListNode(val, null))
    p1 = p1.next
    p2 = p2.next
    console.log('after following pointer')
    console.log(`p1: ${p1 ? p1.val : null}  ${p1 ? p1.next : null}, p2: ${p2 ? p2.val : null}, ${p2 ? p2.next : null}`)
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

  let pointer = nodes[0]
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