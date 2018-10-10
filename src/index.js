import CreateApp from './createapp';
import CreateTunnel from './createTunnel';

require("babel-core/register");
require("babel-polyfill");

var app = new CreateApp('bigboard',8004);
new CreateApp('memories',8006);
new CreateApp('bedside',8007);
new CreateApp('changepw/build',8008);
new CreateApp('taskstationnurse',8009);
new CreateApp('taskstationres',8010);
new CreateApp('familyapp',8011);

//new CreateTunnel('familyapp',8011);

export default app;
