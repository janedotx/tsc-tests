// this works but we get OOMed
function deepCopyArrayOfArrays(sets: number[][]) {
  return sets.map(set => set.slice(0, set.length))
}

function computeSubsets(nums: number[]): number[][] {
  console.log('subsets called')
  if (nums.length === 1) { 
    return [nums]
  }
  return nums.map((num, i) => {
    const subset = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)]
    const smallerSubsets = computeSubsets(subset)
    const smallerSubsetsCopy = deepCopyArrayOfArrays(smallerSubsets)
    smallerSubsetsCopy.forEach(set => { 
      set.push(num) 
    })
    // if (smallerSubsetsCopy[0].length === 0) smallerSubsetsCopy[0] = [num]
    return [...smallerSubsets, ...smallerSubsetsCopy]
  }).flat()
};

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  let equal = true
  arr1.sort()
  arr2.sort()
  arr1.forEach((a1, index) => {
    if (a1 !== arr2[index]) equal = false
  } )
  return equal
}

export function subsets(nums: number[]): number[][] {
  const sets = computeSubsets(nums)
  const cleanSets = [[]]
  sets.forEach(set => { 
    if (!cleanSets.find(x => compareArrays(x, set))) cleanSets.push(set)
  } )
  return cleanSets
}

//////
