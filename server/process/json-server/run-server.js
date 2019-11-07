const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

const runServer = () => {

    server.use(jsonServer.bodyParser)
    server.use(middlewares)
    
    server.listen(port, () => {
     console.log('JSON Server is running')
    })
    
    server.get('/data/blog/:id', (request, response) => {
        if (request.method === 'GET') {
        // must align ids 
        const data = require('../../temp/blogs/blog0.json')
        response.status(200).jsonp(data)
        }
    })
    server.get('/data/blogs', (request, response) => {
        if (request.method === 'GET') {
        const data = require('../data/blogs');
        response.status(200).jsonp(data())
        }
    })
    server.get('/data/menu-options', (request, response) => {
        if (request.method === 'GET') {
        const data = require('../data/menu-options')
        response.status(200).jsonp(data())
        }
    })
}

module.exports = runServer;
