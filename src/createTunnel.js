class CreateTunnel {

  constructor(appName,port){
    this.createTunnel(appName,port);
  }

  createTunnel(appName,port){

    var opt = {
      subdomain: appName
    }

    var localtunnel = require('localtunnel');
    var tunnel = localtunnel(port, opt, function (err, tunnel){
      if(err){
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


}

export default CreateTunnel;
