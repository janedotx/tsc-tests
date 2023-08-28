import { Item } from '../@types'
import { traverse_linked_list } from './helpers'

// constant time
export function delete_linked_list_node(node: Item | null) {
  // next node is null
  if (node.next) {
    node.value = node.next.value
    node.next = node.next.next
  } else {
    node.value = null
  }
}

export const node4 = { value: '4', next: null }
export const node3 = { value: '3', next: node4 }
export const node2 = { value: '2', next: node3 }
export const node1 = { value: '1', next: node2 }

const ll_arr = traverse_linked_list(node1)
console.log(ll_arr)
delete_linked_list_node(node2)
console.log(traverse_linked_list(node1))
delete_linked_list_node(node4)
console.log(traverse_linked_list(node1))
delete_linked_list_node(node1)
console.log(traverse_linked_list(node1))