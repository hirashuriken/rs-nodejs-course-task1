/**
 * Pipeline method
 * @param {ReadableStream} inputStream
 * @param {TransformStream} transformStream
 * @param {WritableStream} outputStream
 * @returns {Promise}
 */
const pipeline = (
  inputStream,
  transformStream,
  outputStream
) => (
  new Promise((resolve, reject) => {
    inputStream
      .pipe(transformStream)
      .pipe(outputStream)
      .on('error', reject)
      .on('finish', resolve);
  })
);

module.exports = pipeline;
