/*
 Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

    "civic" should return True
    "ivicc" should return True
    "civil" should return False
    "livci" should return False

*/

function isPotentialPalindrome(input: string) {
  const dict = {}
  for (let i = 0; i < input.length; i++) {
    const letter = input[i]
    if (!dict[letter]) {
      dict[letter] = 1
    } else {
      dict[letter] += 1
    }
  }
  let seenOne = false
  let possible = true
  // console.log(dict)
  // console.log('')
  Object.keys(dict).forEach(k => {
    if (dict[k] === 1 ) {
      // console.log('found a singleton')
      // console.log('seenOne: ', seenOne)
      // console.log('possible: ', seenOne)
      if (seenOne) possible = false
      else { 
        // console.log('resetting possible')
        seenOne = true
      }
    } 
  })
  return possible
} 

console.log(isPotentialPalindrome("civic"))
console.log(isPotentialPalindrome("ivicc"))
console.log(isPotentialPalindrome("civil"))
console.log(isPotentialPalindrome("livci"))
console.log(isPotentialPalindrome("aaa"))
console.log(isPotentialPalindrome("zz"))
console.log(isPotentialPalindrome("zzaa"))