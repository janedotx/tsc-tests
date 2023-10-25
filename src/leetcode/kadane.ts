// linear time algorithm for finding sum of maximum consecutive subset
function kadane(input: number[]) {
  let biggest
  let i
  let j

  const sums = []
  input.forEach((elem, k) => {
    if (sums.length === 0) {
      sums.push(elem)
      biggest = elem
      i = 0
      j = 0
    } else {
      const maxPrefix = sums[k - 1]
      let curVal
      let startingOver = false
      if (maxPrefix + elem > elem)  {
        curVal = maxPrefix + elem
        sums.push(curVal)
      } else {
        curVal = elem
        sums.push(curVal)
        startingOver = true
      }
      if (biggest < curVal) {
        biggest = curVal
        if (startingOver) { 
          i = k
          j = k
        } else {
          j = k
        }
      } 
    }
  })
  console.log('starting index of biggest subset: ', i)
  console.log('ending index of biggest subset: ', j)
  console.log('biggest: ', biggest)
  return biggest
}

kadane([1,2, 5, -1, 3, -10])
kadane([-2, 0])
kadane([-1])
kadane([1,2, 5, 1, -30, 40])
kadane([1,2, 5, 1, -30, 40, 2, -1, 20, -100])