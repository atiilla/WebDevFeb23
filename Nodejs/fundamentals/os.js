const os = require('os');

let result;

result = os.homedir()
result = os.type()
result = os.arch();
result = os.cpus();
result = os.platform()
result = os.networkInterfaces()
result = os.tmpdir()
result = os.hostname();
result = os.freemem();
result = os.totalmem();
result = os.machine()
result = os.uptime()
result = os.userInfo()
result = os.version() // kernel version

console.log(result)