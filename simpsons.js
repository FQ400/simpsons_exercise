// check if console.log available and prevent
// errors if not
if (!window.console) {
  window.console = {};
  window.console.log = function(){};
}

var people = ['Bart', 'Homer', 'Lisa', 'Maggie', 'Marge'];

var talk = function(person, sentence) {
  if (person == 'Maggie') {
    // console.log(person + " can't talk.");
    return person + " can't talk.";
  }

  if (person == 'Bart') {
    // console.log(person + " eat my shorts.")
    return person + " eat my shorts.";
  }

  if (sentence == 'lol') {
    // console.log(person + ' laughs.');
    return person + ' laughs.';
  } else {
    // console.log(person + ' says: ' + sentence);
    return person + ' says: ' + sentence;
  }
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
