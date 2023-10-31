// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/*

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

interface Datum {
  substring: string
  length: number
}

function suboptimalButWorks(s: string): number {
  let substr = ''
  let maxSubstr = ''

  for (let i = 0; i < s.length; i++) {
    console.log()
    if (i === 0) {
      substr = s[0]
      maxSubstr = s[0]
    } else {
      const lastLetter = s[i - 1]
      const curLetter = s[i]

      if (lastLetter !== curLetter && !substr.includes(curLetter)) {
        // add to string
        substr += curLetter
        if (substr.length > maxSubstr.length) {
          maxSubstr = substr
        }
      } else {
        if (lastLetter !== curLetter && substr.includes(curLetter)) {
          // readjust string

          let index = substr.match(curLetter).index
          substr = substr.slice(index + 1, substr.length) + curLetter
          console.log(substr)
        } 
        if (lastLetter === curLetter) {
          substr = s[i]
        }
      }
    }
  }
  if (substr.length > maxSubstr.length) {
    maxSubstr = substr
  }
  console.log(maxSubstr)
  console.log(maxSubstr.length)
 return maxSubstr.length
}


/*

Runtime
Details
88ms
Beats 41.27%of users with TypeScript

Memory
Details
49.02MB
Beats 40.29%of users with TypeScript

*/
function lengthOfLongestSubstringFaster(s: string): number {
  if (s === '') return 0
  let cur_i = 0
  let cur_j = 0
  let tally: any = {}

  let max_i = 0
  let max_j = 0
  tally[s[0]] = 0

  for (let i = 1; i < s.length; i++) {
      const curLetter = s[i]

      if (tally[curLetter] === undefined) {
        // add to string
        cur_j += 1
      } else {
          let index = tally[curLetter]
          for (let z = cur_i; z <= index; z++) {
            tally[s[z]] = undefined
          }

          cur_i = index + 1
          tally[curLetter] = i
          cur_j += 1
      }
      tally[curLetter] = i

    if (cur_j - cur_i   > max_j - max_i) {
      max_j = cur_j
      max_i = cur_i
    }
  }

 return max_j - max_i + 1
}

/*
Runtime
Details
76ms
Beats 64.93%of users with TypeScript

Memory
Details
45.71MB
Beats 83.63%of users with TypeScript

you have to remove all the console.log statements to get the fastest runtime though
*/

function lengthOfLongestSubstring(s: string): number {
  if (s === '') return 0
  let cur_i = 0
  let cur_j = 0

  let max_i = 0
  let max_j = 0
  const set = new Set()
  set.add(s[0])

  for (let i = 1; i < s.length; i++) {
      const curLetter = s[i]
      if (!set.has(curLetter)) {
        // add to string
        cur_j += 1
        set.add(curLetter)
      } else {
        let index
        for (let z = cur_i; z <= cur_j; z++) {
          if (s[z] === curLetter) {
            index = z
            break;
          }
          set.delete(s[z])
        }
        cur_i = index + 1
        cur_j += 1

      }

    if (cur_j - cur_i   > max_j - max_i) {
      max_j = cur_j
      max_i = cur_i
    }
  }

  console.log()
  console.log(s)
  console.log(`cur substr: ${cur_i} to ${cur_j}`)
  console.log(`max substr: ${max_i} to ${max_j}`)
  console.log(max_j - max_i + 1)

 return max_j - max_i + 1
}

lengthOfLongestSubstring('aaa')
lengthOfLongestSubstring('')
lengthOfLongestSubstring('a331. sss')
lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('aud')
lengthOfLongestSubstring('dvdf')
lengthOfLongestSubstring('bbtablud')
lengthOfLongestSubstring('wobgrovw')
lengthOfLongestSubstring('vqblqcb')
lengthOfLongestSubstring('abaacdefg')