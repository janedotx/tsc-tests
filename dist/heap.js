"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theirHeapify = exports.heapify = exports.swap = void 0;
function getLeftChildIndex(n) { return 2 * n + 1; }
function getRightChildIndex(n) { return 2 * n + 2; }
function getParent(n) {
    return Math.floor((n - 1) / 2);
}
function swap(input, i, j) {
    const val = input[j];
    input[j] = input[i];
    input[i] = val;
}
exports.swap = swap;
function bubbleDown(input, index) {
    console.log('bubbleDown');
    while (index < input.length) {
        console.log('index: ', index);
        console.log(input[index]);
        const leftChildIndex = getLeftChildIndex(index);
        const rightChildIndex = getRightChildIndex(index);
        // stop if there are no children
        if (leftChildIndex >= input.length && rightChildIndex >= input.length)
            return;
        const leftChild = input[leftChildIndex];
        const rightChild = input[rightChildIndex];
        // get larger child
        const indexToCheck = leftChild > rightChild ? leftChildIndex : rightChildIndex;
        // swap parent at `index` with larger child
        if (input[indexToCheck] > input[index]) {
            swap(input, indexToCheck, index);
            index = indexToCheck;
        }
        else {
            break;
        }
    }
}
function heapify(input) {
    let index = input.length - 1;
    while (index >= 0) {
        bubbleDown(input, index);
        index -= 1;
    }
    return input;
}
exports.heapify = heapify;
function theirBubbleDown(heap, index) {
    while (index < heap.length) {
        const leftIndex = getLeftChildIndex(index);
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
function theirHeapify(theArray) {
    // bubble down from the leaf nodes up to the top
    for (let index = theArray.length - 1; index >= 0; index--) {
        theirBubbleDown(theArray, index);
    }
}
exports.theirHeapify = theirHeapify;
