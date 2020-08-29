// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function steps_to_comeback(depth) {
  return ((depth - 1 | 0) << 1);
}

function get_caught(layer, depth) {
  if (depth === 1) {
    return true;
  } else {
    return Caml_int32.mod_(layer, steps_to_comeback(depth)) === 0;
  }
}

function severity(layer, depth) {
  return Math.imul(layer, depth);
}

function num_of_caught(input) {
  return Belt_Array.reduce(input, 0, (function (sum, layer) {
                var num_of_layer = Belt_Array.get(layer, 0);
                if (num_of_layer === undefined) {
                  return sum;
                }
                var depth = Belt_Array.get(layer, 1);
                if (depth !== undefined && get_caught(num_of_layer, depth)) {
                  return sum + Math.imul(num_of_layer, depth) | 0;
                } else {
                  return sum;
                }
              }));
}

function delay_not_to_be_caught(input) {
  var _delay = 0;
  while(true) {
    var delay = _delay;
    var num_of_caught_after_delay = Belt_Array.reduce(input, 0, (function(delay){
        return function (sum, layer) {
          var num_of_layer = Belt_Array.get(layer, 0);
          if (num_of_layer === undefined) {
            return sum;
          }
          var depth = Belt_Array.get(layer, 1);
          if (depth !== undefined && get_caught(num_of_layer + delay | 0, depth)) {
            return sum + 1 | 0;
          } else {
            return sum;
          }
        }
        }(delay)));
    if (num_of_caught_after_delay === 0) {
      return delay;
    }
    _delay = delay + 1 | 0;
    continue ;
  };
}

var input = Belt_Array.map(Fs.readFileSync("input/day13", "utf8").split("\n"), (function (row) {
        return Belt_Array.map(row.split(": "), Caml_format.caml_int_of_string);
      }));

console.log(num_of_caught(input));

console.log(delay_not_to_be_caught(input));

var part1;

var part2;

exports.steps_to_comeback = steps_to_comeback;
exports.get_caught = get_caught;
exports.severity = severity;
exports.num_of_caught = num_of_caught;
exports.delay_not_to_be_caught = delay_not_to_be_caught;
exports.input = input;
exports.part1 = part1;
exports.part2 = part2;
/* input Not a pure module */
