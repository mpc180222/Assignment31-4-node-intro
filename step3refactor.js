const fs = require('fs');
const axios = require('axios');
const argv = process.argv;
let httpText = 'http'

function cat(path){
try{
   let data = fs.readFileSync(path, "utf8")
        return data;}
catch(e){console.log(e);}
        }

 function writeCat(writeTo, writeFrom){
    let data = cat(writeFrom);
         (fs.writeFile(writeTo, data, {encoding: "utf8", flag: "a"}, function(err){
            if (err){
                console.error(err);
                process.exit(1);
            }
            console.log('file written successfully')
        }))    
}

async function webCat(url){
    try{
    let response = await axios.get(url);
    return response;}
    catch(e){
    console.log('Error retrieving page')
    }}

 function writeWebCat(writeTo, writeFrom){
     webCat(writeFrom).then((response) =>{
         (fs.writeFile(writeTo, response.data, {encoding: "utf8", flag: "a"}, function(err){
            if (err){
                console.error(err);
                process.exit(1);
            }
            console.log('file written successfully')
        }))})
        
}

 if(argv[2] === '--out' && argv[4].search(httpText) === -1) writeCat(argv[3], argv[4]);
 else if(argv[2] === '--out' && argv[4].search(httpText) !== -1) writeWebCat(argv[3], argv[4]);
 else if(argv[2].search(httpText) === -1) cat(argv[2]);
 else if(argv[2].search(httpText) !== -1) webCat(argv[2]);