var talk = function(person, sentence) {

  if (person == 'Maggie') {
    return person + ' can\'t talk.';
  }

  if (person == 'Bart') {
    return person +  " eat my shorts.";
  }

  if (sentence == 'lol') {
    return person+' laughs.';
  } else {
    return person + ' says: ' + sentence;
  }
};

var people = ['Bart', "Homer", 'Lisa', 'Maggie', 'Marge'];

function greet(group) {
  for (person in group) {
    talk(person, 'hi.')
  }
};

var laugh = function(group) {
  for (person in group) {
    talk(person, "lol")
  }
};

var joke = function(person) {
	talk(person, 'What is Bruce Lee\'s favorite drink? Wataaaaah!')
};

greet(people);
joke(people[1]);
laugh(people);
