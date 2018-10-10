'use strict';

var fs = require('fs');
var sharp = require('sharp');

module.exports = function resize(path, format, width, height) {
  var readStream = fs.createReadStream(path);

  var transform = sharp();

  if (format) {
    transform = transform.toFormat(format);
  }

  transform = transform.resize(width, height);
  return readStream.pipe(transform);
};
//# sourceMappingURL=resize.js.map