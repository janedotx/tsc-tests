/*
 Write a function max_duffel_bag_value() that takes a list of cake type tuples and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  cake_tuples = [(7, 160), (3, 90), (2, 15)]
capacity    = 20

# Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
max_duffel_bag_value(cake_tuples, capacity)

*/


function get_cakes_with_these_values(cake_values: number[][], capacity: number) {

}

function max_duffel_bag_value_by_density(cake_values: number[][], capacity: number) {
  const densities = cake_values.sort((a, b) => {
    const density_a = a[1]/a[0]
    const density_b = b[1]/b[0]

    if (density_a < density_b) return 1
    else if (density_a > density_b) return -1
    return 0
  })

  let curCapacity = capacity
  let value = 0
  let curCake = 0
  while (true) {
    if (curCake > densities.length - 1) break
    if (curCapacity - densities[curCake][0] < 0) {
      curCake += 1
    } else { 
      curCapacity -= densities[curCake][0]
      value += densities[curCake][1]
      console.log('added cake of value: ', value)
      console.log('curCapacity: ', curCapacity)
    }
  }
  
  return value
}

console.log(max_duffel_bag_value_by_density([[7, 160], [3, 90], [2, 15]], 20))
console.log(max_duffel_bag_value_by_density([[7, 160], [0, 0], [2, 15]], 0))