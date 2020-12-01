// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

var inputTest = Belt_Array.map(Fs.readFileSync("input/2020/day01test", "utf8").trim().split("\n"), Caml_format.caml_int_of_string);

var input = Belt_Array.map(Fs.readFileSync("input/2020/day01", "utf8").trim().split("\n"), Caml_format.caml_int_of_string);

function compute2(_xs, num) {
  while(true) {
    var xs = _xs;
    var shifted = Belt_Array.shuffle(xs);
    var zipped = Belt_Array.zip(xs, shifted);
    var match = Belt_Array.reduce(zipped, [
          0,
          0
        ], (function (acc, param) {
            var b = param[1];
            var a = param[0];
            if ((a + b | 0) === num) {
              return [
                      a,
                      b
                    ];
            } else {
              return acc;
            }
          }));
    var b = match[1];
    var a = match[0];
    if (a !== 0 && b !== 0) {
      return [
              a,
              b
            ];
    }
    _xs = shifted;
    continue ;
  };
}

function compute3(_xs, num) {
  while(true) {
    var xs = _xs;
    var shifted1 = Belt_Array.shuffle(xs);
    var shifted2 = Belt_Array.shuffle(xs);
    var zipped = Belt_Array.zip(Belt_Array.zip(xs, shifted1), shifted2);
    var match = Belt_Array.reduce(zipped, [
          0,
          0,
          0
        ], (function (acc, param) {
            var c = param[1];
            var match = param[0];
            var b = match[1];
            var a = match[0];
            if (((a + b | 0) + c | 0) === num) {
              return [
                      a,
                      b,
                      c
                    ];
            } else {
              return acc;
            }
          }));
    var c = match[2];
    var b = match[1];
    var a = match[0];
    if (a !== 0 && b !== 0 && c !== 0) {
      return [
              a,
              b,
              c
            ];
    }
    _xs = shifted1;
    continue ;
  };
}

var match = compute2(input, 2020);

var part1 = Math.imul(match[0], match[1]);

console.log(part1);

var match$1 = compute3(input, 2020);

var c = match$1[2];

var b = match$1[1];

var a = match$1[0];

var part2 = Math.imul(Math.imul(a, b), c);

console.log(part2);

exports.inputTest = inputTest;
exports.input = input;
exports.compute2 = compute2;
exports.compute3 = compute3;
exports.part1 = part1;
exports.a = a;
exports.b = b;
exports.c = c;
exports.part2 = part2;
/* inputTest Not a pure module */
