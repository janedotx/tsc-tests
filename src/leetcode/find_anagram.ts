function tally(str: string): { [s: string]: number} {
  const s_arr = str.split('')
  const seen_s = {}
  s_arr.forEach(i => {
    if (seen_s[i]) seen_s[i] += 1
    else seen_s[i] = 1
  })
  return seen_s
}

export function isAnagram(s: string, t: string): boolean {
  const s_tally = tally(s)
  const t_tally = tally(t)
  console.dir(s_tally)
  console.dir(t_tally)

  if (Object.keys(s_tally).length !== Object.keys(t_tally).length) return false
  
  let equal = true

  Object.keys(s_tally).forEach(key => {
    console.log('s key: ', key)
    if (s_tally[key] !== t_tally[key]) { 
      console.log(key)
      equal = false }
  })
  Object.keys(t_tally).forEach(key => {
    console.log('t key: ', key)
    if (t_tally[key] !== s_tally[key]) { 
      console.log(key)
      equal = false
       }
  })
  return equal
  
};
