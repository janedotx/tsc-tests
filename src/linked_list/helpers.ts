import { Item } from '../@types'

 // Definition for singly-linked list.
  export class ListNode {
      val: number
     next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }

export function traverse_linked_list(pointer: Item | ListNode) {
  let toReturn
  if ("val" in pointer) toReturn = pointer.val
  if ('value' in pointer) toReturn = pointer.value
  if (pointer.next) {
    return [toReturn, ...traverse_linked_list(pointer.next)]
  } else return [toReturn]
}