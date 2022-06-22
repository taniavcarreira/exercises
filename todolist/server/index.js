require('./database')

const restify = require("restify")
const mongoose = require('mongoose')

const todos = require('./module/todos/controller')

const server = restify.createServer()

server.pre(restify.pre.sanitizePath())
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({mapParams:false, allowDots:true}))
server.use(restify.plugins.bodyParser({mapParams:false, allowDots:true}))

server.use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE')
    return next()
})

server.get('/', (req,res) => {
    res.send('hello server')
})

server.get('/todos', todos.list)
server.post('/todos', todos.save) //endpoint
// server.put('/todos', todos.update) //endpoint
// server.delete('/todos', todos.remove) //endpoint

server.listen(3002, () => console.log('Server UP!')) /*  */