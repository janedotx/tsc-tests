import { swap, heapify,  heapSort,  removeMax } from './heap'
import {  theirHeapify, theirHeapsort,  theirRemoveMax } from './theirHeap'

const a = [1,2,3]
swap(a, 0, 2)

const heapify_me = [8, 3, 2, 7, 9 , 1, 4]
const heapify_me_copy = [8, 3, 2, 7, 9 , 1, 4]

const bb = [2, 1]
const r = theirRemoveMax(bb, 2)
console.log(bb)
console.log(r)

const cc = [2]
theirRemoveMax(cc, 1)
console.log('cc: ', cc)

heapSort(cc)
console.log('my cc: ', cc)

const dd = []
heapSort(dd)
console.log('my dd: ', dd)

const ee = [2,1]
heapSort(ee)
console.log('my ee: ', ee)
