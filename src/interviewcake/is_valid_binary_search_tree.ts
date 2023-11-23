import { bstNode1, invBSTNode1, loneBSTNode } from "./fixtures"

/*
export function isValidBST(node: BTNode) {
  // DFS
  const nodes = [node]

  while (nodes.length > 0) {
    const curNode = nodes.pop()

    // compare node values
    if (curNode.left) {
      const left = curNode.left
        console.log('cur val: ', curNode.value)
        console.log('left val: ', left.value)
      if (left.value > curNode.value) {
        return false
      }
      else nodes.push(left)
    }

    if (curNode.right) {
      const right = curNode.right
        console.log('cur val: ', curNode.value)
        console.log('right val: ', right.value)
      if (right.value < curNode.value) {
        return false
      }
      else nodes.push(right)
    }
    console.log()
  }
  return true
}
*/

function isValidBST(node: BTNode, upper: string | number | null, lower: string | number | null) {
  // if (upper === null) upper = node.value
  // if (lower === null) lower = node.value
  const curValue = node.value

  // trivially, it's true it's balanced

  console.log()
  console.log('cur: ', curValue)
  console.log('upper: ', upper)
  console.log('lower: ', lower)
  if (!node.left && !node.right) return true

  let leftSubtree
  let rightSubtree

  console.log('checking node.left')
  if (node.left) {
    const left = node.left
    console.log('left: ', left.value)
      if (left.value > curValue) {
        console.log('left.value > curValue')
        return false
      } 
      if (lower && left.value < lower) {
        console.log('failed lower check')
        return false
      }
      if (upper && left.value > upper) { 
        console.log('failed upper check')
        return false
      }
      else {
        leftSubtree = isValidBST(left, curValue, lower)
      }
  } else leftSubtree = true
  console.log('checking node.right')

  if (node.right) {
    const right = node.right
    console.log('curValue: ', curValue)
    console.log('right: ', right.value)
    if (right.value < curValue) {
      return  false
    }
    if (lower && right.value < lower) return false
    if (upper && right.value > upper) return false
    else {
      rightSubtree = isValidBST(right, upper, curValue)
    }
  } else rightSubtree = true

  return leftSubtree && rightSubtree
}

console.log(isValidBST(bstNode1, null, null))
console.log(isValidBST(invBSTNode1, null, null))
console.log(isValidBST(loneBSTNode, null, null))