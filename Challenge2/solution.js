/*Challenge 2: Catch those cybercriminals!

Problem

A group of cybercriminals has been using encrypted messages to communicate. The FBI has asked us for help to decipher them.

The messages are text strings that include very long integers and spaces. Although the numbers don't seem to make sense... a girl called Alice has discovered that they could be using the ASCII code of the lowercase letters.

With her method she has managed to decipher these messages:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
But they intercepted a longer message that they couldn't and they told us that it is very important that we decipher it:

11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

Now that you know this, https://codember.dev/encrypted.txt

Hints
Remember that the messages are text strings made up of numbers and spaces.
It seems that the numbers have something to do with the ASCII code.
The whitespaces seem to be just whitespaces... */

const asciiAlphabet = {
  97: 'a',
  99: 'c',
  98: 'b',
  100: 'd',
  101: 'e',
  102: 'f',
  103: 'g',
  104: 'h',
  105: 'i',
  106: 'j',
  107: 'k',
  108: 'l',
  109: 'm',
  110: 'n',
  111: 'o',
  112: 'p',
  113: 'q',
  114: 'r',
  115: 's',
  116: 't',
  117: 'u',
  118: 'v',
  119: 'w',
  120: 'x',
  121: 'y',
  122: 'z',
};
const code =
  '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101';

/**
 *@param {string} code
 */
const translateHacker = (code) => {
  let words = code.split(' ');
  words = words.map((word) => {
    let asciiCode = '';
    let translatedWord = '';
    for (let index = 0; index < word.length; index++) {
      asciiCode += word.at(index);
      if (asciiAlphabet[asciiCode]) {
        translatedWord += asciiAlphabet[asciiCode];
        asciiCode = '';
      }
    }
    return translatedWord;
  });
  return words.join(' ');
};

console.log(translateHacker(code));
