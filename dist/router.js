'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _package = require('../package.json');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resize = require('./resize');

var AppRouter = function () {
  function AppRouter(app) {
    _classCallCheck(this, AppRouter);

    this.app = app;
    this.initRouter();
  }

  _createClass(AppRouter, [{
    key: 'getDateString',
    value: function getDateString() {
      var date = new Date();
      var year = date.getFullYear();
      var monthIndex = date.getMonth() + 1;
      var day = date.getDate();

      var dateStr = year + '-' + monthIndex + '-' + day;
      return dateStr;
    }
  }, {
    key: 'initRouter',
    value: function initRouter() {
      var _this = this;

      var app = this.app;
      var uploadDir = app.get('storageDir');
      var upload = app.get('upload');

      /*app.get('/', (req,res,next)=>{
        return res.status(200).json({
          version: version
        })
      });*/

      app.post('/api/updEvtErl', function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log(req.body);
                  /*const data = req.body;
                  const body = {
                    'MEMID': data.MEMID,
                    'CTRID': 'JCH',
                    'EvtCod': data.EvtCod,
                    'ErlName': data.ErlName,
                    'ErlDat': this.getDateString(),
                    'IsMbr': '1',
                    'ErlPhone': '12345678',
                    'EvtCosID': '1',
                    'EvtAct': data.Reserve?'RSVD':'CANN'
                  };*/

                  _axios2.default.post('http://10.0.48.22/EHMS/api/updEvtErl/', req.body, {
                    headers: {
                      Accept: 'application/x-www-form-json',
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }
                  }).then(function (res) {
                    console.log(res.data.msg);
                    //console.log(json);
                    if (res.data.rtn === "0") {
                      if (reserve) {
                        //ToastAndroid.show('已成功留位!',ToastAndroid.SHORT);
                        return res.status(200).json({
                          received: false
                        });
                      } else {
                        //ToastAndroid.show('已取消留位!',ToastAndroid.SHORT);

                        return res.status(200).json({
                          received: true
                        });
                      }
                    } else {
                      console.log("Failed to reserve");
                      return res.status(404).json({
                        failed: true
                      });
                    }
                  }).catch(function (err) {
                    console.log(err.message);
                    return res.status(404).json({
                      failed: true
                    });
                    //ToastAndroid.show('錯誤!',ToastAndroid.SHORT);
                  });

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());

      app.get('/api/activities', function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
          var _activities;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _axios2.default.get('http://10.0.48.22/EHMS/api/getEvtResBed/');

                case 2:
                  _activities = _context2.sent;
                  return _context2.abrupt('return', res.status(200).json({
                    activities: _activities.data.EvtResBed
                  }));

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function (_x4, _x5, _x6) {
          return _ref2.apply(this, arguments);
        };
      }());

      app.get('/api/todayMeal', function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
          var _meal;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _axios2.default.get('http://10.0.48.22/EHMS/API/getDiet/' + _this.getCurrentDateString());

                case 2:
                  _meal = _context3.sent;
                  return _context3.abrupt('return', res.status(200).json({
                    meal: _meal.data
                  }));

                case 4:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this);
        }));

        return function (_x7, _x8, _x9) {
          return _ref3.apply(this, arguments);
        };
      }());

      app.get('/api/changepw/:oldpw/:newpw', function (req, res, next) {
        var fs = require('fs');
        var filePath = _path2.default.join(uploadDir, 'server.json');
        var serverJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        //console.log(serverJson);
        var allowed = serverJson.password === req.params.oldpw ? true : false;

        if (allowed) {
          var content = {
            password: req.params.newpw
          };
          var _fs = require('fs');
          var _filePath = _path2.default.join(uploadDir, "server.json");

          _fs.writeFileSync(_filePath, JSON.stringify(content, null, 4));
        }

        return res.json({
          changed: allowed
        });
      });

      app.get('/api/login/:password', function (req, res, next) {

        var fs = require('fs');
        var filePath = _path2.default.join(uploadDir, 'server.json');
        var serverJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        //console.log(serverJson);
        var allowed = serverJson.password === req.params.password ? true : false;

        return res.json({
          verified: allowed
        });
      });

      app.post('/api/upload', upload.array('files'), function (req, res, next) {
        //console.log('Received file', req.files);
        return res.json({
          status: 'ok'
          //files: req.files
        });
      });

      app.post('/api/update/:fileName/:json', function (req, res, next) {
        //console.log('Received json');
        var content = JSON.parse(req.params.json);
        var fs = require('fs');
        var filePath = _path2.default.join(uploadDir, req.params.fileName);

        fs.writeFileSync(filePath, JSON.stringify(content, null, 4));
        return res.json({
          update: content
        });
      });

      app.get('/api/download/:name', function (req, res, next) {

        var fileName = req.params.name;
        var filePath = _path2.default.join(uploadDir, fileName);

        var fs = require('fs');
        if (!fs.existsSync(filePath)) {
          filePath = _path2.default.join(uploadDir, 'no_image.png');
          return res.download(filePath, 'no_image.png', function (err) {});
        }

        console.log('donwloading ' + fileName);

        var fileNameArray = fileName.split('.');
        var fileType = fileNameArray[1].toLowerCase();
        //console.log(fileType)
        var ValidImageTypes = ["jpeg", "png", "jpg", "JPG", "PNG"];
        if (ValidImageTypes.includes(fileType)) {
          console.log('resizing');

          var sizeOf = require('image-size');
          var dimensions = sizeOf(filePath);
          //console.log(dimensions.width, dimensions.height);
          for (var i = 0; i < 100; i++) {
            dimensions.width *= 0.98;
            dimensions.height *= 0.98;
            if (dimensions.width < 512 || dimensions.height < 512) {
              break;
            }
          }

          //res.type('image/png');
          resize(filePath, fileType, Math.floor(dimensions.width), Math.floor(dimensions.height)).pipe(res);
        } else {
          console.log('not resizing');
          return res.download(filePath, fileName, function (err) {
            if (err) {
              //console.log('File download error')
            } else {
                //console.log('File download available')
              }
          });
        }
      });

      app.get('/api/delete/:name', function (req, res, next) {
        var fileName = req.params.name;
        var filePath = _path2.default.join(uploadDir, fileName);
        var fs = require('fs');
        try {
          fs.unlinkSync(filePath);
        } catch (err) {
          console.log('Non-existing file removing: ' + fileName);
        }
        console.log('file removed: ' + fileName);
        res.json({
          deleted: true
        });
      });

      console.log('App router initialized');
    }
  }, {
    key: 'getCurrentDateString',
    value: function getCurrentDateString() {
      var date = new Date();
      var year = date.getFullYear();
      var monthIndex = date.getMonth() + 1;
      var day = date.getDate();

      var dateStr = year + '-' + this.addZeroIfSingle(monthIndex) + '-' + this.addZeroIfSingle(day);
      //console.log(dateStr);
      //return '2018-02-08';
      return dateStr;
    }
  }, {
    key: 'addZeroIfSingle',
    value: function addZeroIfSingle(num) {
      if (num < 10) {
        return '0' + String(num);
      } else {
        return '' + String(num);
      }
    }
  }]);

  return AppRouter;
}();

exports.default = AppRouter;
//# sourceMappingURL=router.js.map