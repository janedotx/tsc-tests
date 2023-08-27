function getLeftChildIndex(n) { return 2 * n + 1 }

function getRightChildIndex(n) { return 2 * n + 2 }

function theirBubbleDown(heap: number[], heapLength: number, index: number) {
  while (index < heapLength) {
      const leftIndex  = getLeftChildIndex(index);
      const rightIndex = getRightChildIndex(index);

      // if we don't have any child nodes, we can stop
      if (leftIndex >= heapLength) {
          break;
      }

      // find the larger of the two children
      let largerChildIndex = leftIndex;
      if (rightIndex < heapLength && heap[leftIndex] < heap[rightIndex]) {
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
  console.log('theirHeapify')
  // bubble down from the leaf nodes up to the top
  for (let index = theArray.length - 1; index >= 0; index--) {
      theirBubbleDown(theArray, theArray.length, index);
  }
}

export function theirRemoveMax(input: Array<number>, heapLength: number) {
  // console.log('index: ', index)
  // console.log('input[0]: ', input[0])
  // console.log('input[index]: ', input[index])
  const max = input[0]
  input[0] = input[heapLength - 1]
  theirBubbleDown(input, heapLength - 1, 0)
  return max
}

export function theirHeapsort(theArray: number[]) {
  theirHeapify(theArray);

  let heapSize = theArray.length;

  while (heapSize > 0) {

      // remove the largest item and update the heap size
      const largestValue = theirRemoveMax(theArray, heapSize);
      heapSize -= 1;

      // store the removed value at the end of the array, after
      // the entries used by the heap
      theArray[heapSize] = largestValue;
  }
}