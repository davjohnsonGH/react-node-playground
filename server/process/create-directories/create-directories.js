const fs = require('fs');

// make dir 
const createDirectories = ( dir, count = 10 ) => {

    return new Promise ( (req, res ) => {

        for (let i = 0; i < count; i++)  {

            fs.mkdir(dir + i, { recursive: true }, ( err ) => {
                if (err) throw err;
            }) 
        }

        req();

    }) 
}

module.exports = createDirectories;
