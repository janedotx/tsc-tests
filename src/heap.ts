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

function bubbleDown(input: Array<number>, index: number) {
  console.log('bubbleDown')
  
  while (index < input.length) {
    console.log('index: ', index)
    console.log(input[index])
    const leftChildIndex = getLeftChildIndex(index)
    const rightChildIndex = getRightChildIndex(index)
    
    // stop if there are no children
    if (leftChildIndex >= input.length && rightChildIndex >= input.length) return

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
    bubbleDown(input, index)
    index -= 1
  }
  return input
}

function theirBubbleDown(heap: number[], index: number) {
  while (index < heap.length) {
      const leftIndex  = getLeftChildIndex(index);
      const rightIndex = getRightChildIndex(index);

      // if we don't have any child nodes, we can stop
      if (leftIndex >= heap.length) {
          break;
      }

      // find the larger of the two children
      let largerChildIndex = leftIndex;
      if (rightIndex < heap.length && heap[leftIndex] < heap[rightIndex]) {
          largerChildIndex = rightIndex;
      }

      // are we larger than our children?
      // if so, swap with the larger child.
      if (heap[index] < heap[largerChildIndex]) {
          const tmp = heap[largerChildIndex];
          heap[largerChildIndex] = heap[index];
          heap[index] = tmp;

          // continue bubbling down
          index = largerChildIndex;
      }
      else {

          // we're larger than both children, so we're done
          break;
      }
  }
}

export function theirHeapify(theArray: number[]) {

  // bubble down from the leaf nodes up to the top
  for (let index = theArray.length - 1; index >= 0; index--) {
      theirBubbleDown(theArray, index);
  }
}

export function removeMax(input: Array<number>, index: number) {
  const max = input[0]
  input[0] = input[index]
  heapify(input, index - 1)
  input[index] = max
}

export function heapSort(input: Array<number>) {
  let i = input.length - 1

  while (i >= 0) {
    removeMax(input, i)
    i -= 1
  }
}

