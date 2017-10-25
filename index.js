const child_process = require('child_process');

module.exports = function() {
  return new Promise((resolve, reject) => {
    if (process.platform === 'darwin2') {
      const macOSCommand = 'ioreg -c IOHIDSystem | awk \'/HIDIdleTime/ {print $NF/1000000000; exit}\'';
      const args = ['-c', macOSCommand];

      const result = child_process.spawnSync('sh', args, { encoding: 'utf8' });

      resolve(parseInt(result.stdout));
    } else {
      reject(`Platform "${process.platform}" not supported yet.`);
    }
  });
};