function log_base_2(num: number) {
  return Math.log(num)/Math.log(2)
}

export function convert_to_binary(num: number, debug: boolean) {
  const original = num
  if (num === 0) return '0'
  if (num === 1) return '1'
  const arr: string[] = []
  const exponent = log_base_2(num)
  let power = Math.floor(exponent) 

  let counter = 0

  while (power >= 0) {
    counter += 1
    if (debug) {
      console.log(arr)
      console.log('num: ', num)
      console.log('power: ', power)
    }
    const digit = 2 ** power
    const quotient = Math.floor(num / digit)
    const remainder = num % (digit)

    if (debug) {
      console.log('quotient: ', quotient)
      console.log('remainder: ', remainder)
    }
    if (power === 0){
      if (debug) console.log('power is 0')
      if (quotient === 0 && remainder === 0) arr.push('0')
      if (quotient === 1 && remainder === 0) arr.push('1')
    } else {
      if (quotient === 0) {
        // console.log('appending 0')
        arr.push('0')
      }

      if (quotient > 0) {
        // console.log('quotient bigger')
        // console.log('digit: ', digit)
        num =  num - digit
        // console.log('new num: ', num)
        // console.log('appending 1')
        arr.push('1')
      }
    }

    power -= 1
  }
  // if (num % 2 === 0) arr.push('0') 
  // if (num % 2 === 1) arr.push('1') 

  const result = arr.join('')
  console.log('converted from ', `${original}, ${result}`)
  return result
}