// longest ascending subsequence
export function longestConsecutive(nums: number[]): number {
  let start_i = 0
  let end_i = 0
  let last = nums[0]
  const seen: any[] = []
  let biggest = 0
  nums.forEach((num, i) => {
    if (num >= last) {
      console.log('num is bigger')
      end_i = i
      last = num
    } else {
      console.log('num is not bigger')
      const curLength = end_i - start_i + 1
      if (curLength > biggest) biggest = curLength
      start_i = i
      end_i = i
      last = num
    }
  })
  return biggest

};
console.log(longestConsecutive([3,1,2,3,4, 1, 2, 3, 4, 5,5, 3]))