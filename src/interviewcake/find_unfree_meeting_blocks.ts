function sortTimes(a, b) {
  if (a[0] <= b[0] && a[1] <= b[1]) {
    return -1
  } else if (a[0] >= b[0] && a[1] >= b[1]) {
    return 1
  } else if (a[0] === b[0] && a[1] === b[1]) {
    return 0
  }
  return 0
}
// currently, this analyzes every single possible case for two meetings
// cleaner rewrite is to check for the not merging condition, and only merge if it's false
// and merge if the not merging condition is not met, since there are a lot of
// possible merging cases, but only one not merging case

function find_unfree_meeting_blocks(input: number[][]) {
  input.sort(sortTimes)
  console.log('sorted input: ', input)

  let curBlock = []
  let blocks = []
  input.forEach((item, i) => {
    if (curBlock.length === 0) {
      curBlock = item
    }
    // length === 5, last item index is 4
    if (i + 1 <= input.length - 1) {
      // console.log('inside if statement at index: ', i)
      // console.log('curBlock: ', curBlock)
      // console.log('input i: ', input[i])
      // console.log('input i + 1: ', input[i + 1])
      // console.log('why not this check ', item[1] === input[i + 1][0])
      if (curBlock[1] >= input[i + 1][0] && curBlock[1] <= input[i+1][1]) {
        curBlock[1] = input[i+1][1]
      } else if (curBlock[0] <= input[i + 1][0] && curBlock[1] >= input[i+1][1]) 
      {
        curBlock[1] = curBlock[1]
      }
      else if (curBlock[1] === input[i + 1][0]) {
        // console.log('inside here')
        curBlock[1] = input[i+1][1]
      }
      else if (curBlock[1] < input[i +1][0]) {
        blocks.push(curBlock)
        curBlock = []
      }
    } else {
      blocks.push(curBlock)
    }
  })
  return blocks
}

console.log(find_unfree_meeting_blocks([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))
console.log(find_unfree_meeting_blocks([[0, 12], [3, 8], [4, 8], [10, 12], [9, 10]]))
console.log(find_unfree_meeting_blocks([[1,5], [2,3]]))

