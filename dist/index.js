'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createapp = require('./createapp');

var _createapp2 = _interopRequireDefault(_createapp);

var _createTunnel = require('./createTunnel');

var _createTunnel2 = _interopRequireDefault(_createTunnel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-core/register");
require("babel-polyfill");

var app = new _createapp2.default('bigboard', 8004);
new _createapp2.default('memories', 8006);
new _createapp2.default('bedside', 8007);
new _createapp2.default('changepw/build', 8008);
new _createapp2.default('taskstationnurse', 8009);
new _createapp2.default('taskstationres', 8010);
new _createapp2.default('familyapp', 8011);

//new CreateTunnel('familyapp',8011);

exports.default = app;
//# sourceMappingURL=index.js.map