const fs = require('fs');
const axios = require('axios');
const argv = process.argv;
let httpText = 'http'


function cat(path){

    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){console.log(`Error reading ${path}:`,err)
        process.kill(1)}
        console.log("data...", data)
        
        })
}


async function webCat(url){
try{
let response = await axios.get(url);
console.log(response);}
catch(e){
console.log('Error retrieving page')
}

} 

if(argv[2].search(httpText) === -1) cat(argv[2]);
else{webCat(argv[2])};



