const express = require('express')
const server = express()
const {errorCheck} = require('./middleware/middleware') 
const userRouter = require('./router/userRouter')
const registerRouter = require('./router/registerRouter')
const loginRouter = require('./router/loginRouter')



server.use(express.json())
server.use(errorCheck)

//Get
server.use('/api/users', userRouter)
//Post
server.use('/api/register', registerRouter)
//Post
server.use('/api/login', loginRouter)

server.get('/api/users',(req,res)=>{
    res.send("<h1>Welcome user</h1>")
})

module.exports = server