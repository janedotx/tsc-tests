"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestConsecutive = void 0;
// longest ascending subsequence
function longestConsecutive(nums) {
    let start_i = 0;
    let end_i = 0;
    let last = nums[0];
    const seen = [];
    let biggest = 0;
    nums.forEach((num, i) => {
        if (num >= last) {
            console.log('num is bigger');
            end_i = i;
            last = num;
        }
        else {
            console.log('num is not bigger');
            const curLength = end_i - start_i + 1;
            if (curLength > biggest)
                biggest = curLength;
            start_i = i;
            end_i = i;
            last = num;
        }
    });
    return biggest;
}
exports.longestConsecutive = longestConsecutive;
;
console.log(longestConsecutive([3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 5, 3]));
