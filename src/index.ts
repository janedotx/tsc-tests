import { swap, heapify,  heapSort,  removeMax } from './heap'
import {  theirHeapify, theirHeapsort,  theirRemoveMax } from './theirHeap'
import { longestConsecutive } from './leetcode/longest_consec_contiguous_subsequence'

import { isAnagram } from './leetcode/find_anagram'
import { subsets } from './leetcode/powerset'
import { delete_linked_list_node, node1, node2 } from './linked_list/delete_linked_list_node'
import { traverse_linked_list } from './linked_list/helpers'

const ll_arr = traverse_linked_list(node1)
console.log(ll_arr)
// delete_linked_list_node(node2)
// traverse_linked_list(node1)