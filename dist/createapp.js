'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var storageDir = 'W:';

var CreateApp = function () {
  function CreateApp(appName, port) {
    _classCallCheck(this, CreateApp);

    this.createApp(appName, port);
  }

  _createClass(CreateApp, [{
    key: 'createApp',
    value: function createApp(appName, port) {
      //file storage config
      var storageConfig = _multer2.default.diskStorage({
        destination: function destination(req, file, cb) {
          cb(null, storageDir);
        },
        filename: function filename(req, file, cb) {
          //cb(null, `${Date.now().toString()}-${file.originalname}`);
          cb(null, file.originalname);
        }
      });

      var upload = (0, _multer2.default)({ storage: storageConfig });

      //app config
      var app = (0, _express2.default)();

      app.server = _http2.default.createServer(app);
      app.use((0, _morgan2.default)('dev'));
      app.use((0, _cors2.default)({ exposeHeaders: "*" }));
      app.use(_bodyParser2.default.json({ limit: '50mb' }));
      app.use(_bodyParser2.default.urlencoded({ extended: false }));
      app.use(_express2.default.static(_path2.default.join(__dirname, '' + appName + '/')));

      app.set('root', __dirname);
      app.set('storageDir', storageDir);
      app.set('upload', upload);

      new _router2.default(app);

      app.server.listen(port, function () {
        console.log('App is running on port ' + app.server.address().port);
      });
    }
  }]);

  return CreateApp;
}();

exports.default = CreateApp;
//# sourceMappingURL=createapp.js.map