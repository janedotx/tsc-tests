import { Item } from './@types'

function traverse_linked_list(pointer: Item) {
  console.log(pointer.value)
  if (pointer.next) {
    traverse_linked_list(pointer.next)
  } else return
}

function reverse_linked_list(pointer: Item): Item[] {
  if (pointer.next === null) return [pointer, pointer]
  const [new_head, new_last] = reverse_linked_list(pointer.next)
  pointer.next = null
  new_last.next = pointer
  return [new_head, pointer]
}

const z: Item = {
  next: null,
  value: 'z'
}

const y: Item = {
  next: z,
  value: 'y'
}

const w: Item = {
  next: y,
  value: 'w'
}

console.log('before')
traverse_linked_list(w)
const [res] = reverse_linked_list(w)
console.log('after')
console.log(traverse_linked_list(res))

const alone = {next: null, value: 'nillywilly'}
traverse_linked_list(alone)
console.log(reverse_linked_list(alone)[0].value)