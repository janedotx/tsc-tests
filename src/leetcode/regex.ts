// https://leetcode.com/problems/regular-expression-matching/
/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).
*/

interface State {
  val: string | null
  nextStates: State[]
  matcher: (x: string) => boolean | null
}

function generateStateMachine(regex: string) {
  const machine = []
  for (let i = 0; i < regex.length; i++) {
    const cur = regex[i]
    const prev = machine[i - 1]

    let matcher
    if (cur === '.') {
      matcher = (x: string) => true
    } else if (cur === '*') {
      if (!prev) {
        throw new Error('invalid regex, * must be preceded by a char')
      }
      matcher = (x: string) => prev.matcher(x) 
    } else {
      matcher = (x: string) => x === cur
    }

    const curState = { val: cur, nextStates: [], matcher }

    if (cur !== '*') {
      machine.push(curState)
      if (prev) {
        prev.nextStates.push(curState)  
      }
    } else {
      prev.nextStates.push(prev)
    }
  }
  machine.push({ val: null, nextStates: [], matcher: (x: string) => true })
  if (machine[machine.length - 2]) machine[machine.length - 2].nextStates.push(machine[machine.length  - 1])

  return machine
}

// console.log('a*')
// console.dir(generateStateMachine('a*'))
// console.log('aa')
// console.dir(generateStateMachine('aa'))

/*
// test cases
let states = generateStateMachine('a*')
console.log('loop?: ', isLoop(states[0]))
let states2 = generateStateMachine('ab')
console.log('loop?: ', isLoop(states2[1]))
*/
function isLoop(state: State) {
  return state.nextStates.includes(state)
}

function hasTerminus(state: State) {
  return state.nextStates.find(s => s.val === null)
}


function isMatch(input: string, regex: string): boolean {
  const machine = generateStateMachine(regex)
  let curState:  State = machine[0]
  // console.log('machine')
  // console.log(machine)
  let reachedEnd = false

  for (let i = 0; i < input.length; i++) {
    const curChar = input[i]
    // console.log('i: ', i)
    // console.log('curState: ', curState)
    // console.log('curState.matcher(curChar): ', curState.matcher(curChar))
    if (curState.val && curState.matcher(curChar)) {
      if (!isLoop(curState)) curState = curState.nextStates[0]
      // else {
      //   const otherPath = 
      // }
    } else {
      // reached null state
      return false
    }
  }

  if (!curState.val) {
    return true
  }
  // console.log('terminated loop, curState: ', curState)
  if (isLoop(curState) && hasTerminus(curState)) return true
  return false
};

console.log('input: aa, regex: /aa/')
console.log(isMatch('aa', 'aa') === true)

console.log('input: a, regex: /a/')
console.log(isMatch('a', 'a') === true)

console.log('input: a, regex: /.*/')
console.log(isMatch('a', '.*') === true)

console.log('input: b, regex: /a/')
console.log(isMatch('b', 'a') === false)

console.log('input: ba, regex: /b*/')
console.log(isMatch('ba', 'b*') === false)
// console.log('input: ba, regex: /a/')
// console.log(isMatch('ba', 'a') === true)
// console.log()
// console.log('input: ba, regex: /z/')
// console.log(isMatch('ba', 'z') === false)

// console.log('input: ba, regex: /.*/')
// console.log(isMatch('ba', '.*') === true)

// console.log('input: baa, regex: /a*/')
// console.log(isMatch('baa', 'a*') === true)

// console.log('input: baad, regex: /a*/')
// console.log(isMatch('baad', 'a*') === true)

// console.log('input: baad, regex: /z*/')
// console.log(isMatch('baad', 'z*') === false)

console.log('input: aa, regex: a')
console.log(isMatch('aa', 'a') === false)
