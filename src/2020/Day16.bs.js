// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_MapInt = require("bs-platform/lib/js/belt_MapInt.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Belt_SetInt = require("bs-platform/lib/js/belt_SetInt.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");

var inputTest = Fs.readFileSync("input/2020/d16test", "utf8").trim().split("\n\n");

var inputTest2 = Belt_Array.map(Fs.readFileSync("input/2020/d16test2", "utf8").trim().split("\n\n"), (function (i) {
        return i.split("\n");
      }));

var input = Fs.readFileSync("input/2020/d16", "utf8").trim().split("\n\n");

var input2 = Belt_Array.map(Fs.readFileSync("input/2020/d16", "utf8").trim().split("\n\n"), (function (i) {
        return i.split("\n");
      }));

function parseTest(str, re, _acc) {
  while(true) {
    var acc = _acc;
    var result = re.exec(str);
    if (result === null) {
      return acc;
    }
    var from = Caml_format.caml_int_of_string(Belt_Option.getExn(Caml_option.nullable_to_opt(Belt_Array.getExn(result, 1))));
    var to_ = Caml_format.caml_int_of_string(Belt_Option.getExn(Caml_option.nullable_to_opt(Belt_Array.getExn(result, 2))));
    _acc = Belt_Array.concat(acc, Belt_Array.range(from, to_));
    continue ;
  };
}

function parseNumbers(str, re, _acc) {
  while(true) {
    var acc = _acc;
    var result = re.exec(str);
    if (result === null) {
      return acc;
    }
    var num = Caml_format.caml_int_of_string(Belt_Option.getExn(Caml_option.nullable_to_opt(Belt_Array.getExn(result, 0))));
    _acc = Belt_Array.concat(acc, [num]);
    continue ;
  };
}

function parse(lines) {
  return Belt_Array.map(lines, (function (line) {
                var reTest = /(\d+)\-(\d+)/g;
                var re = /(\d+)\-(\d+)/g;
                var reNums = /\d+/g;
                var isTest = reTest.test(line);
                if (isTest) {
                  return parseTest(line, re, []);
                } else {
                  return parseNumbers(line, reNums, []);
                }
              }));
}

function checkValid(nums) {
  var test = Belt_SetInt.fromArray(Belt_Array.getExn(nums, 0));
  var numbers = Belt_Array.getExn(nums, 2);
  return Belt_Array.reduce(numbers, 0, (function (acc, n) {
                if (Belt_SetInt.has(test, n)) {
                  return acc;
                } else {
                  return acc + n | 0;
                }
              }));
}

function $$process(lines) {
  var tests = Belt_Array.getExn(lines, 0);
  var myTicket = Belt_Array.getExn(lines, 1);
  var tickets = Belt_Array.getExn(lines, 2);
  var testMap = Belt_Array.reduce(tests, undefined, (function (acc, test) {
          var name = Belt_Array.getExn(test.split(":"), 0);
          var re = /(\d+)\-(\d+)/g;
          var values = Belt_SetInt.fromArray(parseTest(test, re, []));
          return Belt_MapString.set(acc, name, values);
        }));
  var reMyTicket = /\d+/g;
  var myTicketArr = parseNumbers(Belt_Array.getExn(myTicket, 1), reMyTicket, []);
  var ticketMatrix = Belt_Array.reduceWithIndex(Belt_Array.keep(Belt_Array.sliceToEnd(tickets, 1), (function (t) {
              var splitted = Belt_Array.map(t.split(","), Caml_format.caml_int_of_string);
              return Belt_MapString.reduce(testMap, false, (function (acc, k, set) {
                            if (acc) {
                              return acc;
                            } else {
                              return Belt_Array.every(splitted, (function (spl) {
                                            return Belt_SetInt.has(set, spl);
                                          }));
                            }
                          }));
            })), undefined, (function (acc, ticket, idxY) {
          return Belt_Array.reduceWithIndex(ticket.split(","), acc, (function (ac, t, idxX) {
                        var prev = Belt_MapInt.get(ac, idxX);
                        if (prev !== undefined) {
                          return Belt_MapInt.set(ac, idxX, Belt_Array.concat(prev, [Caml_format.caml_int_of_string(t)]));
                        } else {
                          return Belt_MapInt.set(ac, idxX, [Caml_format.caml_int_of_string(t)]);
                        }
                      }));
        }));
  return [
          myTicketArr,
          Belt_MapString.toArray(Belt_MapString.map(testMap, (function (set) {
                      return Belt_MapInt.keysToArray(Belt_MapInt.keep(ticketMatrix, (function (k, v) {
                                        return v.length === Belt_Array.keep(v, (function (i) {
                                                      return Belt_SetInt.has(set, i);
                                                    })).length;
                                      })));
                    })))
        ];
}

function checkMyTicket(param) {
  var myTicket = param[0];
  var sort = function (_ta, _acc) {
    while(true) {
      var acc = _acc;
      var ta = _ta;
      var field = Belt_Array.keep(ta, (function (t) {
              return t[1].length === 1;
            }));
      var length = field.length;
      if (length === 0) {
        return acc;
      }
      var match = Belt_Array.getExn(field, 0);
      var name = match[0];
      var col = Belt_Array.getExn(match[1], 0);
      var newAcc = Belt_Array.concat(acc, [[
              name,
              col
            ]]);
      var newTa = Belt_Array.keep(Belt_Array.map(ta, (function(col){
              return function (t) {
                var newValues = Belt_Array.keep(t[1], (function (i) {
                        return i !== col;
                      }));
                return [
                        t[0],
                        newValues
                      ];
              }
              }(col))), (function(name){
          return function (t) {
            return t[0] !== name;
          }
          }(name)));
      _acc = newAcc;
      _ta = newTa;
      continue ;
    };
  };
  return Belt_Array.reduce(sort(param[1], []), 1.0, (function (acc, t) {
                if (t[0].includes("departure")) {
                  return acc * Belt_Array.getExn(myTicket, t[1]);
                } else {
                  return acc;
                }
              }));
}

console.log(checkValid(parse(input)));

console.log(checkMyTicket($$process(input2)));

exports.inputTest = inputTest;
exports.inputTest2 = inputTest2;
exports.input = input;
exports.input2 = input2;
exports.parseTest = parseTest;
exports.parseNumbers = parseNumbers;
exports.parse = parse;
exports.checkValid = checkValid;
exports.$$process = $$process;
exports.checkMyTicket = checkMyTicket;
/* inputTest Not a pure module */
