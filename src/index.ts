import { swap, heapify,  heapSort,  removeMax } from './heap'
import {  theirHeapify, theirHeapsort,  theirRemoveMax } from './theirHeap'
import { longestConsecutive } from './leetcode/longest_consec_contiguous_subsequence'

import { isAnagram } from './leetcode/find_anagram'
import { subsets } from './leetcode/powerset'
import { convert_to_binary } from './leetcode/convert_to_binary'
import { delete_linked_list_node, node1, node2, node4 } from './linked_list/delete_linked_list_node'
import { traverse_linked_list, ListNode } from './linked_list/helpers'

import {  addTwoNumbers } from './linked_list/add_two_numbers'

const nine0 = new ListNode(9, null)
const nine1 = new ListNode(9, null)
const nine2 = new ListNode(9, null)
const nine3 = new ListNode(9, null)

nine0.next = nine1
nine1.next = nine2
nine2.next = nine3

const nine10 = new ListNode(9, null)
const nine11 = new ListNode(9, null)
const nine12 = new ListNode(9, null)
const nine13 = new ListNode(9, null)
const nine14 = new ListNode(9, null)

nine10.next = nine11
nine11.next = nine12
nine12.next = nine13
nine13.next = nine14

// [18, 18, 18, 18, 9]
// [8, 9, 9, 9, 0, 1]

const n = addTwoNumbers(nine0, nine10)
console.log(traverse_linked_list(n))