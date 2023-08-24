const testArr1 = [0, -1, 5, -1];
const testArr2 = [0, 1, 5, -1];
function findBiggestSubset(input) {
    const solutions = input.map(x => []);
    let i = 0;
    let j = 0;
    let max_i = 0;
    let max_j = 0;
    let biggest = input[0];
    solutions[0][0] = input[0];
    while (i < input.length) {
        while (j < input.length) {
            if (i === j) {
                solutions[i][j] = input[i];
            }
            else {
                solutions[i][j] = solutions[i][j - 1] + input[j];
            }
            const newVal = solutions[i][j];
            if (newVal > biggest) {
                max_i = i;
                max_j = j;
                biggest = newVal;
            }
            j = j + 1;
        }
        i += 1;
        j = i;
    }
    console.log('finished');
    console.log('max_i: ', max_i);
    console.log('max_j: ', max_j);
    console.log('biggest: ', biggest);
    console.dir(solutions);
}
findBiggestSubset(testArr1);
findBiggestSubset(testArr2);
findBiggestSubset([2]);
