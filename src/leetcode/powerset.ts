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

// works without getting OOM-killed on leetcode
function computePowerSubsets(input: number[]): number[][] {
  if (input.length === 0 || input.length === 1) {
    return [input]
  }
  let subsets = [[input[0]]]
  for (let i = 1; i < input.length; i++) {
    const keep = deepCopyArrayOfArrays(subsets)
    keep.forEach(k => k.push(input[i]))
    subsets = [...subsets, ...keep]
  }
  return subsets
}

function powerset(input: number[]): number[][] {
  let all = []
  for (let i = 0; i < input.length; i ++) {
    all.push(computePowerSubsets(input.slice(i, input.length)))
  }

  all.push([[]])
  return all.flat()

}