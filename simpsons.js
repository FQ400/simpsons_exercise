// ----- use this only in browsers
// check if console.log available and prevent
// errors if not
// if (!window.console) {
//   window.console = {};
//   window.console.log = function() {};
// }
// -----

var people = ['Bart', 'Homer', 'Lisa', 'Maggie', 'Marge'];

var talk = function(person, sentence) {

  var result = '';

  if (person == 'Maggie') {
    result = person + " can't talk.";
  }

  if (person == 'Bart') {
    result = person + ' eat my shorts.';
  }

  if (sentence == 'lol') {
    result = person + ' laughs.';
  } else {
    result = person + ' says: ' + sentence;
  }
  // console.log(result);
  return result
};

var greet = function(group) {
  for (person_idx in group) {
    talk(group[person_idx], 'hi.')
  }
};

var laugh = function(group) {
  for (person_idx in group) {
    talk(group[person_idx], 'lol')
  }
};

var joke = function(person) {
  talk(person, "What is Bruce Lee's favorite drink? Wataaaaah!")
};

greet(people);
joke(people[1]);
laugh(people);
