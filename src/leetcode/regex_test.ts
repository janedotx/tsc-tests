import { isMatch } from './regex'
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

// don't have to be concerned with this case
// console.log('input: \'\', regex: /b*aa/')
// console.log(isMatch('', 'b*aa') === false)
// console.log()
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

console.log('input: mississippi, regex: mis*i*s*ip*i')
console.log(isMatch('mississippi', 'mis*i*s*ip*i') === true)
console.log()

