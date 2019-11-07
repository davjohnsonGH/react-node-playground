const fs = require('fs');

// make dir 
const createDir = (dir) => {
    return new Promise ( (req, res ) => {
        fs.mkdir(dir, { recursive: true }, ( err ) => {
            if (err) throw err;
            req();
        })

    }) 
}

module.exports = createDir;
