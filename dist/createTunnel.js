'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateTunnel = function () {
  function CreateTunnel(appName, port) {
    _classCallCheck(this, CreateTunnel);

    this.createTunnel(appName, port);
  }

  _createClass(CreateTunnel, [{
    key: 'createTunnel',
    value: function createTunnel(appName, port) {

      var opt = {
        subdomain: appName
      };

      var localtunnel = require('localtunnel');
      var tunnel = localtunnel(port, opt, function (err, tunnel) {
        if (err) {
          console.log('localltunnel error');
          process.exit(1); // we want it to restart and get a local tunnel that works
        }
        tunnel.url;
      });

      tunnel.on('close', function () {
        process.exit(1);
      });

      tunnel.on('error', function (err) {
        process.exit(err);
      });

      process.on('uncaughtException', function (err) {
        process.exit(err);
      });

      console.log('Tunnel created,port: ' + port + ' name: ' + appName);
    }
  }]);

  return CreateTunnel;
}();

exports.default = CreateTunnel;
//# sourceMappingURL=createTunnel.js.map