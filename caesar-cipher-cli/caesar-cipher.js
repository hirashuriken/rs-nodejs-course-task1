const a_CHAR_CODE = 65;
const z_CHAR_CODE = 90;
const A_CHAR_CODE = 97;
const Z_CHAR_CODE = 122;
const CHARS_COUNT = 26;
const CYRILLIC_CHARS_REG_EXP = /[a-z]/i;

/**
 * Returns transformed string by caesar cipher
 * @param {String} str
 * @param {Number} shift
 * @returns {String}
 */
const caesarCipher = (str, shift) => {
  if (shift < 0) {
    return caesarCipher(str, shift + 26);
  }

  let transformedStr = '';

  for (let charIdx = 0; charIdx < str.length; charIdx++) {
    let char = str[charIdx];
    let transformedChar = char;

    if (char.match(CYRILLIC_CHARS_REG_EXP)) {
      let charCode = str.charCodeAt(charIdx);

      if ((charCode >= a_CHAR_CODE) && (charCode <= z_CHAR_CODE)) {
        transformedChar = String.fromCharCode(((charCode - a_CHAR_CODE + shift) % CHARS_COUNT) + a_CHAR_CODE);
      } else if ((charCode >= A_CHAR_CODE) && (charCode <= Z_CHAR_CODE)) {
        transformedChar = String.fromCharCode(((charCode - A_CHAR_CODE + shift) % CHARS_COUNT) + A_CHAR_CODE);
      }
    }

    transformedStr += transformedChar;
  }

  return transformedStr;
};

module.exports = caesarCipher;
