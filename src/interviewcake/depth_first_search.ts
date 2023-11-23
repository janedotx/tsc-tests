// https://www.interviewcake.com/question/python/balanced-binary-tree?course=fc1&section=trees-graphs

import { nodeA1, nodeZ1 } from "./fixtures"

function depthFirstSearch(node: BTNode, depth: number) {
  depth += 1
  console.log(`value: ${node.value}, depth: ${depth}`)
  let depths = [depth]
  let leftDepths = []
  let rightDepths = []
  
  if (node.left)  { 
    leftDepths = depthFirstSearch(node.left, depth) 
    if (leftDepths.length === 1 && leftDepths[0] === -1) return [-1]
  }
  if (node.right) {
    rightDepths = depthFirstSearch(node.right, depth)
    if (rightDepths.length === 1 && rightDepths[0] === -1) return [-1]
  }
  depths = [depth, ...leftDepths, ...rightDepths].sort()
  if (depths[depths.length - 1] - depths[0] > 1) return [-1]
  return depths
}


console.log(depthFirstSearch(nodeA1, 0))

console.log(depthFirstSearch(nodeZ1, 0))
