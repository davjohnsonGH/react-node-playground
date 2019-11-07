//config 
const config = require('./config');
// helpers 
const runServer = require('./process/json-server/run-server');
const createDir = require('./process/create-directories/create-directory');
const writeFiles = require('./process/write-files/write-files');
//content
const blogContent = require('../content/blog.json');

createDir( config.blogsPath )
    .then( () => { return writeFiles( config.blogsPath + '/blog', '.json', blogContent, config.numberOfBlogs ) } )
    .then( () => { runServer()} );
