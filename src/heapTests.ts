import { swap, heapify,  heapSort,  removeMax } from './heap'
import {  theirHeapify, theirHeapsort,  theirRemoveMax } from './theirHeap'

const a = [1,2,3]
swap(a, 0, 2)

const heapify_me = [8, 3, 2, 7, 9 , 1, 4]
const heapify_me_copy = [8, 3, 2, 7, 9 , 1, 4]

// console.log('before')
// console.log(heapify_me)
// theirHeapify(heapify_me)



// removeMax(heapify_me_copy, 6)
// console.log(heapify_me_copy)
// removeMax(heapify_me_copy, 5)
// removeMax(heapify_me_copy, 4)
// removeMax(heapify_me_copy, 3)

// theirHeapsort(heapify_me_copy)
console.log('theirs')
console.log(heapify_me)
theirHeapsort(heapify_me)
console.log(heapify_me)

console.log('mine')
console.log(heapify_me_copy)
heapSort(heapify_me_copy)
console.log(heapify_me_copy)

const aa = [2, 1]
console.log(aa)
heapSort(aa)
console.log('aa: ', aa)


const ba = [9, 100, 10, 10, 2, 1, 4, 20]
console.log(ba)
heapSort(ba)
console.log(ba)

