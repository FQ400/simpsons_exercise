'use strict';

// ----- use this only in browsers
// check if console.log available and prevent
// errors if not
if (!window.console) {
  window.console = {};
  window.console.log = function () {};
}
// -----

var print_result = function (arg) {
  console.log(arg);
  return arg;
};

var people = ['Bart', 'Homer', 'Lisa', 'Maggie', 'Marge'];

var talk = function (person, sentence) {

  if (person === 'Maggie' && sentence !== 'lol') {
    return print_result(person + " can't talk.");
  }

  if (person === 'Bart') {
    return print_result(person + ' says: eat my shorts.');
  }

  if (sentence === 'lol') {
    return print_result(person + ' laughs.');
  }

  return print_result(person + ' says: ' + sentence);
};

var greet = function (group) {
  var idx;
  for (idx = 0; idx < people.length; idx += 1) {
    talk(group[idx], 'hi.');
  }
};

var laugh = function (group) {
  var idx;
  for (idx = 0; idx < people.length; idx += 1) {
    talk(group[idx], 'lol');
  }
};

var joke = function (person) {
  talk(person, "What is Bruce Lee's favorite drink? Wataaaaah!");
};

greet(people);
joke(people[1]);
laugh(people);
