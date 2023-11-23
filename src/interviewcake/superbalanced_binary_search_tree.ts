// https://www.interviewcake.com/question/python/balanced-binary-tree?course=fc1&section=trees-graphs

function isSuperbalanced(parent: BTNode): any { 
  let maxDepth = 1
  let minDepth = 1

  const depthSet = new Set<number>()

  const nodes: BTNode[] = [parent]
  let depth = 1
  depthSet.add(1)
  // DFS

  // every time we add some children, increase depth by 1

    
  const depths = Array.from(depthSet).sort()
  console.log(depths)
  return depths[depths.length - 1] - depths[0] === 1

}

const nodeF = { left: null, right: null, value: 'F' }
const nodeG = { left: null, right: null, value: 'G' }
const nodeD = { left: nodeF, right: nodeG, value: 'D' }
const nodeE = { left: null, right: null, value: 'E' }
const nodeB = { left: nodeD, right: nodeE, value: 'B' }
const nodeC = { left: null, right: null, value: 'C' }
const nodeA = { left: nodeB, right: nodeC, value: 'A' }

console.log(isSuperbalanced(nodeA))

