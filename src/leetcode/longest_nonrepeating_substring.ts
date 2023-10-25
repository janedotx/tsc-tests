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
  let dupeLetter = ''

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

function lengthOfLongestSubstring(s: string): number {
  let substr = ''
  let maxSubstr = ''
  let tally: any = {}

  for (let i = 0; i < s.length; i++) {
    console.log()
    if (i === 0) {
      substr = s[0]
      maxSubstr = s[0]
      tally[s[0]] = 0
    } else {
      const lastLetter = s[i - 1]
      const curLetter = s[i]
      console.log('substr: ', substr)
      console.log('lastLetter: ', lastLetter)
      console.log('curLetter: ', curLetter)
      console.log('tally[curLetter]: ', tally[curLetter])
      console.log('substr does not include ', !tally[curLetter])
      if (lastLetter !== curLetter && tally[curLetter] === undefined) {
        // add to string
        console.log('adding to string')
        substr += curLetter
        if (substr.length > maxSubstr.length) {
          maxSubstr = substr
        }
        console.log(substr)
      } else {
        console.log('do not add to string')
        if (lastLetter !== curLetter && tally[curLetter] !== undefined) {
          // readjust string
          console.log('readjusting to string')

          let index = substr.match(curLetter).index
          console.log(index)
          for (let z = 0; z <= index; z++) {
            tally[substr[z]] = undefined
          }

          substr = substr.slice(index + 1, substr.length) + curLetter

          console.log('after readjusting')
          console.log(substr)
        } 
        if (lastLetter === curLetter) {
          console.log('restarting a substring')
          substr = s[i]
          Object.keys(tally).forEach(t => tally[t] = undefined)
        }
      }
      tally[curLetter] = i
    }
  }
  if (substr.length > maxSubstr.length) {
    maxSubstr = substr
  }
  console.log(maxSubstr)
  console.log(maxSubstr.length)
 return maxSubstr.length
};

// lengthOfLongestSubstring('aaa')
// lengthOfLongestSubstring('')
// lengthOfLongestSubstring('a331. sss')
// lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('aud')
lengthOfLongestSubstring('dvdf')
lengthOfLongestSubstring('bbtablud')
lengthOfLongestSubstring('wobgrovw')