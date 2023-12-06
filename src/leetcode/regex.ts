// https://leetcode.com/problems/regular-expression-matching/
/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).
*/

import { machine } from "os"

interface State {
  val: string | null
  nextStates: State[]
  matcher: (x: string) => boolean | null
}

function generateStateMachine(regex: string) {
  const machine = []
  let prev = null
  for (let i = 0; i < regex.length; i++) {
    const cur = regex[i]

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
      // console.log('cur: ', cur)
      machine.push(curState)
      if (prev) {
        // console.log('prev: ', prev)
        prev.nextStates.push(curState)  
      }
      prev = curState
    } else {
      prev.nextStates.push(prev)
    }
  }

  // should matcher be false at the terminal node? or null?
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

function getNextNodeNotSelf(state: State) {
  return state.nextStates.find(s => state !== s)
}
let globalCounter = 0

function isMatchMachine(input: string, machineNode: State): boolean {
  // globalCounter += 1
  // console.log('globalCounter: ', globalCounter)
  // console.log('machine')
  // console.log(machineNode)
  if (machineNode.val === null && input.length > 0) return false
  if (machineNode.val && input.length === 0) return false
  let curState = machineNode
  let alternatePathRes = false
  let currentPath = true

  for (let i = 0; i < input.length; i++) {
    const curChar = input[i]
    // console.log('i: ', i)
    // console.log('curState.matcher(curChar): ', curState.matcher(curChar))
    if (curState.val) {
      if (curState.matcher(curChar)) {
        // console.log('a match!: ', curState.val, curChar)
        if (!isLoop(curState)) curState = curState.nextStates[0]
        else {
          // console.log('hitting an alternative path')
          // console.log()
          // console.log('curState: ', curState)
          // console.log('trying alternate path')
          // console.log(input.slice(i + 1, input.length))
          // console.log(getNextNodeNotSelf(curState))
          // advance past loop and try with next char
          alternatePathRes = isMatchMachine(input.slice(i + 1, input.length), getNextNodeNotSelf(curState))
        }
      } else {
        // console.log('not a match, must be false')
        // console.log('alternatePathRes: ', alternatePathRes)
        // not a match, must be false, or, if we're in a loop, advance past loop and keep trying
        if (!isLoop(curState)) {
          currentPath = false
          return alternatePathRes || currentPath
          break;
        } else {
        // advance past loop and keep trying with current letter
          alternatePathRes = isMatchMachine(input.slice(i, input.length), getNextNodeNotSelf(curState))
        }
      }
    } else {
      // ran out of regex, must be false
      currentPath = false
        return alternatePathRes || currentPath
      break;
    }
  }
  

  if (curState.val && !isLoop(curState)) {
    console.log('ran out of input string')
    currentPath = false
        return alternatePathRes || currentPath
  }
  // console.log('terminated loop, curState: ', curState)
  if (isLoop(curState) && hasTerminus(curState)) {
    console.log('regex terminated with a loop')
    currentPath = true
        return alternatePathRes || currentPath
  }
  console.log('alternatePathRes: ', alternatePathRes)
  console.log('currentPath: ', currentPath)
  return alternatePathRes || currentPath
}

function isMatch(input: string, regex: string): boolean {
  const machine: State[] = generateStateMachine(regex)
  /*
  console.log('printing machine')
  machine.forEach(m => {
    console.log(m)
    console.log('nextStates: ', m.nextStates.map(s => s.val))
  })
  */
  return isMatchMachine(input, machine[0])
};

///*
console.log('input: aa, regex: /aa/')
console.log(isMatch('aa', 'aa') === true)
console.log()

console.log('input: a, regex: /a/')
console.log(isMatch('a', 'a') === true)
console.log()
//*/

console.log('input: a, regex: /.*/')
console.log(isMatch('a', '.*') === true)
console.log()

console.log('input: b, regex: /a/')
console.log(isMatch('b', 'a') === false)
console.log()

console.log('input: ba, regex: /b*/')
console.log(isMatch('ba', 'b*') === false)
console.log()

console.log('input: ba, regex: /a/')
console.log(isMatch('ba', 'a') === false)
console.log()
console.log('input: ba, regex: /z/')
console.log(isMatch('ba', 'z') === false)
console.log()

console.log('input: ba, regex: /.*/')
console.log(isMatch('ba', '.*') === true)
console.log()

// console.log(generateStateMachine('b*aa'))

///*
console.log('input: baa, regex: /b*aa/')
console.log(isMatch('baa', 'b*aa') === true)
console.log()

console.log('input: \'\', regex: /b*aa/')
console.log(isMatch('', 'b*aa') === false)
console.log()
//*/

console.log('input: baad, regex: /ba*d*/')
console.log(isMatch('baad', 'ba*d*') === true)
console.log()

console.log('input: baad, regex: /z*/')
console.log(isMatch('baad', 'z*') === false)
console.log()

console.log('input: aa, regex: a')
console.log(isMatch('aa', 'a') === false)
console.log()

console.log('input: aa, regex: c*aa')
console.log(isMatch('aa', 'c*aa') === true)
console.log()

console.log('input: aa, regex: d*c*aa')
console.log(isMatch('aa', 'd*c*aa') === true)
console.log()