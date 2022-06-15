

const fs = require('fs');

module.exports = function () {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            process.stdout.write("\nprompt > ");
            throw err;            
        } else {
            process.stdout.write(files.join('\n'));  
            process.stdout.write("\nprompt > ");    
        }
      
    })
};