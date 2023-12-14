// https://leetcode.com/problems/regular-expression-matching/
/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).
*/
const DEBUG = false

function logit(msg: string) {
  if (DEBUG) console.log(msg)
}

interface State {
  val: string | null
  nextStates: State[]
  index: number
  matcher: (x: string) => boolean | null
}

export function generateStateMachine(regex: string) {
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
  let curLoop = null
  for (let i = 0; i < machine.length; i++) {
    machine[i].index = i
  }

  for (let i = 1; i < machine.length; i++) {
    console.log('i: ', i)
    console.log('curloop: ', curLoop)
    console.log('machine[i]: ', machine[i])
    const cur = machine[i]

    if (curLoop) {
      if (isLoop(cur) && (curLoop.val === cur.val || curLoop.val === '.')) {
        if (curLoop.val == cur.val) {
          console.log('consolidating identical nodees')
          curLoop.nextStates = machine[i].nextStates
        } else if (curLoop.val === '.') {
          curLoop.nextStates = [curLoop]
          curLoop.nextStates.push(getNextNodeNotSelf(machine[i]))
        }
      } else {
        console.log('ran into something that cannot consolidate')
        curLoop = null
      }
    }
    else  {
      if (isLoop(machine[i-1]) && isLoop(cur) && (machine[i-1].val === cur.val || machine[i-1].val === '.')) {
        console.log('starting a new loop')
        curLoop = machine[i-1]
        if (curLoop.val == cur.val) {
          curLoop.nextStates = cur.nextStates
        } else if (curLoop.val === '.') {
          curLoop.nextStates = [curLoop]
          curLoop.nextStates.push(getNextNodeNotSelf(cur))
        }
      }
    
    }

  } 
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
  if (!state) return false
  return state.nextStates.includes(state)
}

function hasTerminus(state: State) {
  return state.nextStates.find(s => s.val === null)
}

function printMachine(m: State) {
    let cur = m
    while (true) {
      if (cur.val === null) break;
  
      if (isLoop(cur)) console.log(cur.val + '*')
      else console.log(cur.val)
    console.log(cur.index)

    console.log('states')
    cur.nextStates.forEach(s => console.log(s))
    console.log()
      if (cur.nextStates.length > 1) {
        cur = cur.nextStates[1]
      } else {
        cur = cur.nextStates[0]
      }
    }
  }

function getNextNodeNotSelf(state: State) {
  return state.nextStates.find(s => state !== s)
}
let globalCounter = 0

function isMatchMachine(input: string, machineNode: State): number {
  // globalCounter += 1
  // console.log('globalCounter: ', globalCounter)
  // console.log('machine')
  // console.log(machineNode)
  if (machineNode.val === null && input.length > 0) return -1 
  if (machineNode.val && input.length === 0) return -1
  let curState = machineNode
  let alternatePathRes = false
  let currentPath = true
  let counter = 0
  let forkCount = 0
  let counters = []

  for (let i = 0; i < input.length; i++) {
    const curChar = input[i]
        // console.log('top of loop', curState.val, curChar)
    // console.log('i: ', i)
    // console.log('curState.matcher(curChar): ', curState.matcher(curChar))
    if (curState.val) {
      if (curState.matcher(curChar)) {
        counter += 1
        // calmly advance to next regex node
        if (!isLoop(curState)) curState = curState.nextStates[0]
        else {
          // console.log('advance past the loop')
          // console.log('curState: ', curState)
          // console.log('input.slice(i + 1, input.length): ', input.slice(i + 1, input.length))
          // console.log(getNextNodeNotSelf(curState))
          // console.log('end output for advancing past the loop')
          // console.log()
          // advance past loop and try with next char
          // if this path doesn't work out, we don't advance the regex and we stay in the loop and move
          // on to the next char
          forkCount = isMatchMachine(input.slice(i + 1, input.length), getNextNodeNotSelf(curState))
          // console.log('counter: ', counter)
          // console.log('forkCount length: ', forkCount)
          if (counter + forkCount === input.length) return input.length
        }
      } else {
        // console.log('not a match, must be false')
        // console.log('alternatePathRes: ', alternatePathRes)
        // not a match, must be false, or, if we're in a loop, advance past loop and keep trying
        if (!isLoop(curState)) {
          break;
        } else {
        // advance past loop and keep trying with current letter
          // console.log('trying alternate path, advance past loop and try again with current letter')
          forkCount = isMatchMachine(input.slice(i, input.length), getNextNodeNotSelf(curState))
          // console.log('counter: ', counter)
          // console.log('forkCount length: ', forkCount)
          if (counter + forkCount === input.length) return input.length
        }
      }
    } else {
      // ran out of regex, must be false
      // console.log('ran out of regex')
      break;
    }
  }

  // if (curState.val && !isLoop(curState)) {
  //    console.log('ran out of input string')
  //    counter = -100
  // }

  // if (curState.val && isLoop(curState) && getNextNodeNotSelf(curState).val !== null) {
  //    console.log('ran out of input string')
  //    counter = -100
  // }
  
  // console.log('printing machine')
  // console.log(curState)
  // printMachine(curState)

  // if (curState.nextStates.length > 0) {
  //   counter = -100
  // }
  if (curState.nextStates.length > 0) {
        while (true) {
          if (curState.val === null) break;
          if (curState.val !== null && (!isLoop(curState))) {
            counter = -100
            break;
          }
          curState = getNextNodeNotSelf(curState)
        }
       }
  

  // if (curState.val && !isLoop(curState)) {
  //   console.log('ran out of input string')
  //   currentPath = false
  //       return alternatePathRes || currentPath
  // }
  // // console.log('terminated loop, curState: ', curState)
  // if (isLoop(curState) && hasTerminus(curState)) {
  //   console.log('regex terminated with a loop')
  //   currentPath = true
  //       return alternatePathRes || currentPath
  // }
  // console.log('alternatePathRes: ', alternatePathRes)
  // console.log('currentPath: ', currentPath)
  // console.log('about to return counter: ', counter)
  // console.log('last machine node: ', curState)
  return counter
}

export function isMatch(input: string, regex: string): boolean {
  const machine: State[] = generateStateMachine(regex)
  /*
  console.log('printing machine')
  machine.forEach(m => {
    console.log(m)
    console.log('nextStates: ', m.nextStates.map(s => s.val))
  })
  */
 const res = isMatchMachine(input, machine[0])
 console.log('res: ', res)
  return res === input.length
};


// console.log('input: ab, regex: ".*c"')
// console.log(isMatch('ab', '.*c') === false)
// console.log()

// console.log('input: a, regex: "aa"')
// console.log(isMatch('a', 'aa') === false)
// console.log()

// console.log('input: a, regex: "aaa"')
// console.log(isMatch('a', 'aaa') === false)
// console.log()

// console.log('input: a, regex: "ab*"')
// console.log(isMatch('a', 'ab*') === true)
// console.log()

// console.log('input: aaa, regex: "a*"')
// console.log(isMatch('aaa', 'a*') === true)
// console.log()

// console.log('input: aaa, regex: "a*b*a"')
// console.log(isMatch('aaa', 'a*b*a') === true)
// console.log()


// console.log('input: aaa, regex: "a*b*a"')
// console.log(isMatch('aaa', 'a*b*a') === true)
// console.log()


// const dotstar = generateStateMachine('.*a*b*')
// // console.log(dotstar)
// // console.log(isLoop(dotstar[0]))
// printMachine(dotstar[0])
//  console.log()
// printMachine(generateStateMachine('a*.*b*')[0])
//  console.log()
// printMachine(generateStateMachine('.*a*ab*')[0])
//  console.log()
printMachine(generateStateMachine('a*a*a*b*')[0])