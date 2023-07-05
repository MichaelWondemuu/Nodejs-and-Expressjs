const os = require('os');

// get user information
const user = os.userInfo();
console.log(user);
console.log(`System uptime is ${os.uptime()/(360 *60)} hours`);

const pcInfo ={
    name: os.type,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    release: os.release()
};
console.log(pcInfo);