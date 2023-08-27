import { swap, heapify, theirHeapify, heapSort } from './heap'

const a = [1,2,3]
swap(a, 0, 2)

const heapify_me = [8, 3, 2, 7, 9 , 1, 4]
const heapify_me_copy = [8, 3, 2, 7, 9 , 1, 4]

// console.log('before')
// console.log(heapify_me)
// theirHeapify(heapify_me)

// console.log(heapify_me)

// heapify(heapify_me_copy, heapify_me_copy.length - 1)

heapSort(heapify_me_copy)
console.log(heapify_me_copy)

