// ROT13

const isUpperCase = char => char === char.toUpperCase();
const isAlphabet = char => /^[a-zA-Z]$/.test(char);


const ROT13Cipher = test => {
const alphaLow = 'abcdefghijklmnopqrstuvwxyz'
let chars = test.split('');
let rot13String = '';
chars.forEach(char => {
let isLetter = isAlphabet(char);
let isCapital = isUpperCase(char);
if(isLetter) {
  if(isCapital) char = char.toLowerCase();
  let index = alphaLow.indexOf(char)+13;
  let rot13Char = index>25? alphaLow[index-26] : alphaLow[index];
  if(isCapital) rot13Char = rot13Char.toUpperCase();
  rot13String += rot13Char;
}
else rot13String += char;
})
return rot13String;
}

let encoded = `"Qba'g gel gb or yvxr Wnpxvr. Gurer vf bayl bar Wnpxvr. Fghql pbzchgref vafgrnq." - Wnpxvr Puna`;

console.log(ROT13Cipher(encoded))