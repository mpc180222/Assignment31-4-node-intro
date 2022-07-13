const fs = require('fs');
const argv = process.argv;


function cat(path){

    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){console.log(`Error reading ${path}:`,err)
        process.kill(1)}
        console.log("data...", data)
        
        })
}

cat(argv[2]);