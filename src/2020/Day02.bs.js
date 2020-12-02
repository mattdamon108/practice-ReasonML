// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Int = require("bs-platform/lib/js/belt_Int.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

var inputTest = Belt_Array.map(Fs.readFileSync("input/2020/day02test", "utf8").trim().split("\n"), (function (i) {
        return i.split(" ");
      }));

var input = Belt_Array.map(Fs.readFileSync("input/2020/day02", "utf8").trim().split("\n"), (function (i) {
        return i.split(" ");
      }));

function checkValid(range, $$char, password) {
  var rg = range.split("-");
  var least = Belt_Option.getExn(Belt_Int.fromString(Belt_Array.getExn(rg, 0)));
  var most = Belt_Option.getExn(Belt_Int.fromString(Belt_Array.getExn(rg, 1)));
  var c = $$char.substring(0, 1);
  var counted = Belt_Array.keep(password.split(""), (function (i) {
          return i === c;
        })).length;
  if (least <= counted) {
    return counted <= most;
  } else {
    return false;
  }
}

function checkValid2(range, $$char, password) {
  var rg = range.split("-");
  var firstPos = Belt_Option.getExn(Belt_Int.fromString(Belt_Array.getExn(rg, 0)));
  var secondPos = Belt_Option.getExn(Belt_Int.fromString(Belt_Array.getExn(rg, 1)));
  var c = $$char.substring(0, 1);
  var splittedPW = password.split("");
  var match1 = Belt_Array.get(splittedPW, firstPos - 1 | 0);
  var match2 = Belt_Array.get(splittedPW, secondPos - 1 | 0);
  var result1 = match1 !== undefined ? match1 === c : false;
  var result2 = match2 !== undefined ? match2 === c : false;
  if (result1) {
    if (result2) {
      return false;
    } else {
      return true;
    }
  } else if (result2) {
    return true;
  } else {
    return false;
  }
}

console.log(Belt_Array.keep(input, (function (i) {
            var range = Belt_Array.getExn(i, 0);
            var $$char = Belt_Array.getExn(i, 1);
            var password = Belt_Array.getExn(i, 2);
            return checkValid(range, $$char, password);
          })).length);

console.log(Belt_Array.keep(input, (function (i) {
            var range = Belt_Array.getExn(i, 0);
            var $$char = Belt_Array.getExn(i, 1);
            var password = Belt_Array.getExn(i, 2);
            return checkValid2(range, $$char, password);
          })).length);

exports.inputTest = inputTest;
exports.input = input;
exports.checkValid = checkValid;
exports.checkValid2 = checkValid2;
/* inputTest Not a pure module */