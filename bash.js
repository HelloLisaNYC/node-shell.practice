process.stdout.write("prompt > ");

const pwd = require('./pwd');
const ls = require('./ls');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd(cmd);
    process.stdout.write("\nprompt > ");
  }
  else if (cmd === 'ls') {
    ls();
    process.stdout.write("\nprompt > ");
  }
  else {
    process.stdout.write('i only do pwd and ls');
    process.stdout.write("\nprompt > ");
  }
})
