import { Item } from '../@types'

export function traverse_linked_list(pointer: Item) {
  console.log(pointer.value)
  if (pointer.next) {
    return [pointer.value, ...traverse_linked_list(pointer.next)]
  } else return [pointer.value]
}

