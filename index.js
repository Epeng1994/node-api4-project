require('dotenv').config()
const server = require('./src/server/server')
const PORT = process.env.PORT ||9000 

server.listen(PORT, ()=>{
    console.log('Server is up')
})