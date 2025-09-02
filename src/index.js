/*
const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};
*/

module.exports = function decode(code) {
  const morseAlphabet = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

  const letters = [];
  let res = '';
  const result = [];
  let finalRes = '';

  for (let i = 0; i < code.length; i += 10) {
    letters.push(code.slice(i, i + 10));
  }

  for (let j = 0; j < letters.length; j += 1) {
    const test = letters[j];
    if (!test.includes('*')) {
      for (let i = 0; i < 10; i += 2) {
        const elem = `${test[i]}${test[i + 1]}`;
        if (elem[0] === '0') {
          res += '';
        } else if (elem[0]) {
          if (elem[1] === '0') {
            res += '.';
          } else {
            res += '-';
          }
        }
      }
    } else {
      res += ' ';
    }

    result.push(res);
    res = '';
  }

  for (let i = 0; i < result.length; i += 1) {
    finalRes += morseAlphabet[result[i]];
  }

  return finalRes.replaceAll('undefined', ' ');
};
