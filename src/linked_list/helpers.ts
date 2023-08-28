import { Item } from '../@types'

export function traverse_linked_list(pointer: Item) {
  if (pointer.next) {
    return [pointer.value, ...traverse_linked_list(pointer.next)]
  } else return [pointer.value]
}

