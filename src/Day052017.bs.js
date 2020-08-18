// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

var input = Belt_Array.map(Fs.readFileSync("input/day05", "utf8").trim().split("\n"), Caml_format.caml_int_of_string);

var input2 = input.slice(0);

function runner(maze, _idx, _count) {
  while(true) {
    var count = _count;
    var idx = _idx;
    var jump = Belt_Array.get(maze, idx);
    if (jump === undefined) {
      return count;
    }
    Belt_Array.set(maze, idx, jump + 1 | 0);
    _count = count + 1 | 0;
    _idx = idx + jump | 0;
    continue ;
  };
}

function runner_hop(maze, _idx, _count) {
  while(true) {
    var count = _count;
    var idx = _idx;
    var jump = Belt_Array.get(maze, idx);
    if (jump === undefined) {
      return count;
    }
    Belt_Array.set(maze, idx, jump >= 3 ? jump - 1 | 0 : jump + 1 | 0);
    _count = count + 1 | 0;
    _idx = idx + jump | 0;
    continue ;
  };
}

console.log(runner(input, 0, 0));

console.log(runner_hop(input2, 0, 0));

var arr1 = [
  1,
  2,
  3
];

Belt_Array.set(arr1, 0, 5);

console.log(arr1);

console.log(arr1);

var part1;

var part2;

var arr2 = arr1;

exports.input = input;
exports.input2 = input2;
exports.runner = runner;
exports.runner_hop = runner_hop;
exports.part1 = part1;
exports.part2 = part2;
exports.arr1 = arr1;
exports.arr2 = arr2;
/* input Not a pure module */
