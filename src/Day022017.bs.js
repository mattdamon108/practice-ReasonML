// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

var input = Belt_List.map(Belt_List.fromArray(Belt_Array.map(Fs.readFileSync("input/day0201", "utf8").split("\n"), (function (a) {
                return a.split("\t");
              }))), (function (a) {
        return Belt_List.map(Belt_List.fromArray(a), Caml_format.caml_int_of_string);
      }));

var listOfHead = Belt_List.map(input, (function (a) {
        return Belt_List.reduce(a, 0, (function (acc, item) {
                      if (acc > item) {
                        return acc;
                      } else {
                        return item;
                      }
                    }));
      }));

var max = Belt_List.reduce(listOfHead, 0, (function (acc, item) {
        if (acc > item) {
          return acc;
        } else {
          return item;
        }
      }));

var listOfTail = Belt_List.map(input, (function (a) {
        return Belt_List.reduce(a, max, (function (acc, item) {
                      if (acc > item) {
                        return item;
                      } else {
                        return acc;
                      }
                    }));
      }));

function getFlatRemainder(x, y) {
  if (x > y) {
    if (Caml_int32.mod_(x, y) === 0) {
      return Caml_int32.div(x, y);
    } else {
      return 0;
    }
  } else if (y > x && Caml_int32.mod_(y, x) === 0) {
    return Caml_int32.div(y, x);
  } else {
    return 0;
  }
}

function computeRemainder(xs, ys) {
  return Belt_List.reduce(Belt_List.map(xs, (function (a) {
                    return Belt_List.reduce(ys, 0, (function (acc, item) {
                                  return acc + getFlatRemainder(a, item) | 0;
                                }));
                  })), 0, (function (acc, item) {
                return acc + item | 0;
              })) / 2 | 0;
}

console.log(Belt_List.reduce(Belt_List.map(Belt_List.zip(listOfHead, listOfTail), (function (param) {
                return param[0] - param[1] | 0;
              })), 0, (function (prim, prim$1) {
            return prim + prim$1 | 0;
          })));

console.log(Belt_List.reduce(Belt_List.map(input, (function (a) {
                return computeRemainder(a, a);
              })), 0, (function (prim, prim$1) {
            return prim + prim$1 | 0;
          })));

var part1;

var part2;

exports.input = input;
exports.listOfHead = listOfHead;
exports.max = max;
exports.listOfTail = listOfTail;
exports.getFlatRemainder = getFlatRemainder;
exports.computeRemainder = computeRemainder;
exports.part1 = part1;
exports.part2 = part2;
/* input Not a pure module */
