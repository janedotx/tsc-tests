import { swap, heapify,  heapSort,  removeMax } from './heap'
import {  theirHeapify, theirHeapsort,  theirRemoveMax } from './theirHeap'
import { longestConsecutive } from './leetcode/longest_consec_contiguous_subsequence'

import { isAnagram } from './leetcode/find_anagram'
import { subsets } from './leetcode/powerset'

const sets  = subsets([1, 2, 3])
console.log("sets: ", sets)

console.log(subsets([1]))

console.log(subsets([4, 1, 0]))