const fs = require('fs');

const FILE_NOT_FOUND_ERR_CODE = 'ENOENT';

/**
 * Returns readable file stream
 * @param {String} filePath
 * @return {ReadableStream}
 */
const getReadFileStream = filePath => (
  fs.createReadStream(filePath)
    .on('error', (err) => {
      let errorMsg = '';

      if (err.code === FILE_NOT_FOUND_ERR_CODE) {
        errorMsg = 'Input file isn\'t found \n';
      } else {
        errorMsg = 'Some problems with a file, please, try again \n';
      }

      process.stderr.write(errorMsg);
      process.exit(1);
    })
);

/**
 * Returns writable file stream
 * @param {String} filePath
 * @return {WritableStream}
 */
const getWriteFileStream = filePath => (
  fs.createWriteStream(filePath)
    .on('error', (err) => {
      let errorMsg = '';

      if (err.code === FILE_NOT_FOUND_ERR_CODE) {
        errorMsg = 'Output file isn\'t found \n';
      } else {
        errorMsg = 'Some problems with a file, please, try again \n';
      }

      process.stderr.write(errorMsg);
      process.exit(1);
    })
);

module.exports = {
  getReadFileStream,
  getWriteFileStream
};
