import { Item } from '../@types'

// constant time
export function delete_linked_list_node(node: Item | null) {
  console.log(node)
  node = node ? node.next : null
  console.log(node)
}

export const node3 = { value: '3', next: null }
export const node2 = { value: '2', next: node3 }
export const node1 = { value: '1', next: node2 }