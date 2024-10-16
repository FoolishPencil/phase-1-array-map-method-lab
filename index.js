const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const uppercaseWords = ["API", "OO", "NaN", "JSONP?"]; // Special terms to capitalize

function titleCased() {
  return tutorials.map(title => {
    return title.split(' ').map(word => {
      // Check for special words
      if (uppercaseWords.includes(word)) {
        return word;
      }
      // Capitalize camelCase methods specifically
      else if (word === 'stopPropagation') return 'StopPropagation';
      else if (word === 'preventDefault?') return 'PreventDefault?';
      // Capitalize the first letter of other words
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' '); // Rejoin the words into a string
  });
}

// Get the capitalized titles
const capitalizedStrings = titleCased();
console.log(capitalizedStrings);
