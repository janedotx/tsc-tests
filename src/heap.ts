function getLeftChildIndex(n) { return 2 * n + 1 }

function getRightChildIndex(n) { return 2 * n + 2 }

function getParent(n) {
  return Math.floor((n-1)/2)
}

export function swap(input: Array<number>, i: number, j: number) {
  const val = input[j]
  input[j] = input[i]
  input[i] = val
}

function bubbleDown(input: Array<number>, index: number, limit: number) {
  // console.log('bubbleDown')
  
  while (index < limit) {
    // console.log('index: ', index)
    // console.log(input[index])
    const leftChildIndex = getLeftChildIndex(index)
    const rightChildIndex = getRightChildIndex(index)
    
    // stop if there are no children
    if (leftChildIndex >= limit && rightChildIndex >= limit) return

    const leftChild = input[leftChildIndex]
    const rightChild = input[rightChildIndex]

    // get larger child
    const indexToCheck = leftChild > rightChild ? leftChildIndex : rightChildIndex

    // swap parent at `index` with larger child
    if (input[indexToCheck] > input[index]) {
      swap(input, indexToCheck, index)
      index = indexToCheck
    } else {
      break
    }
  }
}

export function heapify(input: Array<number>, end: number) {
  let index = end
  while (index >= 0) {
    bubbleDown(input, index, end)
    index -= 1
  }
  return input
}
export function removeMax(input: Array<number>, index: number) {
  // console.log('index: ', index)
  // console.log('input[0]: ', input[0])
  // console.log('input[index]: ', input[index])
  console.log('removeMax')
  console.log('input')
  const max = input[0]
  input[0] = input[index]
  bubbleDown(input, 0, index - 1)
  input[index] = max
  return max
}

export function heapSort(input: Array<number>) {
  const lastIndex = input.length - 1
  heapify(input, lastIndex)
  let i = lastIndex

  while (i > 1) {
    removeMax(input, i)
    i -= 1
  }
}


