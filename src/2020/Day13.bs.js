// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

var inputTest = Fs.readFileSync("input/2020/day13test", "utf8").trim().split("\n");

var input = Fs.readFileSync("input/2020/day13", "utf8").trim().split("\n");

function getStartTime(input) {
  return Belt_Array.getExn(input, 0);
}

function getTimetable(input) {
  return Belt_Array.getExn(input, 1).split(",");
}

function waitTime(input) {
  var startTime = Caml_format.caml_int_of_string(Belt_Array.getExn(input, 0));
  var timetable = Belt_Array.map(Belt_Array.keep(getTimetable(input), (function (i) {
              return i !== "x";
            })), Caml_format.caml_int_of_string);
  var match = Belt_Array.reduce(Belt_Array.map(timetable, (function (t) {
              if (Caml_int32.mod_(startTime, t) === 0) {
                return [
                        t,
                        0
                      ];
              } else {
                return [
                        t,
                        Math.imul(Caml_int32.div(startTime, t) + 1 | 0, t) - startTime | 0
                      ];
              }
            })), [
        0,
        Pervasives.max_int
      ], (function (acc, item) {
          if (acc[1] > item[1]) {
            return item;
          } else {
            return acc;
          }
        }));
  return Math.imul(match[0], match[1]);
}

function timestamp(input) {
  var timetable = Belt_Array.map(Belt_Array.keep(Belt_Array.mapWithIndex(getTimetable(input), (function (idx, busId) {
                  return [
                          idx,
                          busId
                        ];
                })), (function (i) {
              return i[1] !== "x";
            })), (function (i) {
          return [
                  i[0],
                  Caml_format.caml_float_of_string(i[1])
                ];
        }));
  return Belt_Array.reduce(timetable, [
              0.0,
              1.0
            ], (function (acc, param) {
                var m = acc[1];
                var lcm = acc[0];
                var busId = param[1];
                var offset = param[0];
                var _n = 1.0;
                while(true) {
                  var n = _n;
                  var num = lcm + m * n;
                  var result = offset === 0.0 ? num % busId === 0.0 : num % busId === busId - offset % busId;
                  if (result) {
                    return [
                            num,
                            m * busId
                          ];
                  }
                  _n = n + 1.0;
                  continue ;
                };
              }));
}

console.log(waitTime(input));

console.log(timestamp(input));

exports.inputTest = inputTest;
exports.input = input;
exports.getStartTime = getStartTime;
exports.getTimetable = getTimetable;
exports.waitTime = waitTime;
exports.timestamp = timestamp;
/* inputTest Not a pure module */
