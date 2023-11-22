// https://www.interviewcake.com/question/python/balanced-binary-tree?course=fc1&section=trees-graphs
interface BTNode {
  value: string | null
  left: BTNode | null
  right: BTNode | null
}

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


const nodeF1: BTNode = { left: null, right: null, value: 'F' }
const nodeG1: BTNode = { left: null, right: null, value: 'G' }
const nodeD1: BTNode = { left: nodeF1, right: nodeG1, value: 'D' }
const nodeE1: BTNode = { left: null, right: null, value: 'E' }
const nodeB1: BTNode = { left: nodeD1, right: nodeE1, value: 'B' }
const nodeC1: BTNode = { left: null, right: null, value: 'C' }
const nodeA1: BTNode = { left: nodeB1, right: nodeC1, value: 'A' }

console.log(depthFirstSearch(nodeA1, 0))

const nodeX1: BTNode = { left: null, right: null, value: 'B' }
const nodeY1: BTNode = { left: null, right: null, value: 'C' }
const nodeZ1: BTNode = { left: nodeY1, right: nodeX1, value: 'A' }
console.log(depthFirstSearch(nodeZ1, 0))
