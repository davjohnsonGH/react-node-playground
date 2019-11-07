const config = require('../../config');
const fs = require('fs');

const writeFile = ( path, fileType, content, count = 10) => {

    return new Promise ( (req, res ) => {
        for (let i = 0; i < count; i++) {
            
            config.modifyContent && ( content.title = config.genericBlogTilte + i, content.contentPath = config.blogsPath + i );
            
            fs.writeFile( path + i + fileType,  JSON.stringify( content )  , (err) => {
                if (err) throw err;
            })
        }

        req();

    }) 
}

module.exports = writeFile;
