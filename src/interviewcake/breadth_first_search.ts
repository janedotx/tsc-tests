import { nodeA1 } from "./fixtures"

function bfs(node: BTNode) {
  const nodes = [node]

  while (nodes.length > 0) {
    const curNode = nodes.shift()

    console.log(curNode.value)

    if (curNode.left) nodes.push(curNode.left)
    if (curNode.right) nodes.push(curNode.right)
  }
}


bfs(nodeA1)