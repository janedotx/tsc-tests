const nodeF1: BTNode = { left: null, right: null, value: 'F' }
const nodeG1: BTNode = { left: null, right: null, value: 'G' }
const nodeD1: BTNode = { left: nodeF1, right: nodeG1, value: 'D' }
const nodeE1: BTNode = { left: null, right: null, value: 'E' }
const nodeB1: BTNode = { left: nodeD1, right: nodeE1, value: 'B' }
const nodeH1: BTNode = { left: null, right: null, value: 'H' }
const nodeC1: BTNode = { left: nodeH1, right: null, value: 'C' }
export const nodeA1: BTNode = { left: nodeB1, right: nodeC1, value: 'A' }

const nodeX1: BTNode = { left: null, right: null, value: 'B' }
const nodeY1: BTNode = { left: null, right: null, value: 'C' }
export const nodeZ1: BTNode = { left: nodeY1, right: nodeX1, value: 'A' }


// valid BST nodes

const bstNode7: BTNode = { left: null, right: null, value: 25 }
const bstNode6: BTNode = { left: null, right: null, value: 15 }
const bstNode5: BTNode = { left: null, right: null, value: 9 }
const bstNode4: BTNode = { left: null, right: null, value: 7 }
const bstNode3: BTNode = { left: bstNode6, right: bstNode7, value: 20 }
const bstNode2: BTNode = { left: bstNode4, right: bstNode5, value: 8 }
export const bstNode1: BTNode = { left: bstNode2, right: bstNode3, value: 10 }

// invalid BST nodes

const invBSTNode7: BTNode = { left: null, right: null, value: 2 }
const invBSTNode6: BTNode = { left: null, right: null, value: 3 }
const invBSTNode5: BTNode = { left: null, right: null, value: 8 }
const invBSTNode4: BTNode = { left: null, right: null, value: 1 }
const invBSTNode3: BTNode = { left: invBSTNode6, right: invBSTNode7, value: 11 }
const invBSTNode2: BTNode = { left: invBSTNode4, right: invBSTNode5, value: 7 }
export const invBSTNode1: BTNode = { left: invBSTNode2, right: invBSTNode3, value: 10 }

export const loneBSTNode: BTNode = { left: null, right: null, value: 10 }