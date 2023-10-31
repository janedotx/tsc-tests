// assume it's all  numbers and only numbers

function binary_search_engine(input: number[], item, start_i = -1, end_j = -1) {
  if ((end_j - start_i) === 0) {
    if (input[start_i] === item) return start_i
    else return null
  }

  const middle = Math.floor((end_j - start_i) / 2) + start_i

  return ((binary_search_engine(input, item, start_i, middle) 
    ?? binary_search_engine(input, item, middle + 1, end_j)) 
      ?? null)
}

function binary_search(input: number[], item): number {
  if (input.length === 0) return -1
  if (input.length === 1) {
    if (input[0] === item) return 0
    else return -1
  }

  const middle = Math.floor(input.length / 2)

  const r = (binary_search_engine(input, item, 0, middle) 
    ?? binary_search_engine(input, item, middle + 1, input.length - 1))
      ?? -1

  return r
}

console.log(binary_search([1,2,3,3,4], 1))
console.log(binary_search([1,2,3,3,4], 2))
console.log(binary_search([1,2,3,3,4], 3))
console.log(binary_search([1,2,3,3,4], 4))
console.log(binary_search([1,2,3,3,4, 10, 12, 34], 10))
const res1 = binary_search([], 4)
console.log(res1)
const bres2 = binary_search([0], 4)
console.log(bres2)
const bres3 = binary_search([0], 0)
console.log(bres3)
const bres4 = binary_search([0, 1], 0)
console.log(bres4)