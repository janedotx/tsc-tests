"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const powerset_1 = require("./leetcode/powerset");
const sets = (0, powerset_1.subsets)([1, 2, 3]);
console.log("sets: ", sets);
console.log((0, powerset_1.subsets)([1]));
console.log((0, powerset_1.subsets)([4, 1, 0]));
