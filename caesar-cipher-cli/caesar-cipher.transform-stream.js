const through2 = require('through2');

const caesarCipher = require('./caesar-cipher.js');

/**
 * Returns caesar cipher transform stream
 * @param {Number} shift
 * @param {String} action
 * @returns {TransformStream}
 */
const caesarCipherTransformStream = (shift, action) => through2((data, _, cb) => {
  const str = data.toString();

  let transformedStr;

  if (action === 'decode') {
    transformedStr = caesarCipher(str, shift * (-1));
  } else {
    transformedStr = caesarCipher(str, shift);
  }

  cb(null, Buffer.from(transformedStr));
});

module.exports = caesarCipherTransformStream;
