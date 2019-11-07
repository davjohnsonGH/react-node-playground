const fs = require('fs');

const writeFile = ( file, blogContent ) => {
    return new Promise ( (req, res ) => {
        fs.writeFile( file, JSON.stringify( blogContent ), (err) => {
            if (err) throw err;
            req();
        })
    }) 
}

module.exports = writeFile;
