const express = require('express')
const router = express.Router()
const {getUsers} = require('../userInfo')

router.get('/',(req,res, next)=>{
    getUsers()
        .then(result=>{
            res.json(result)
        })
        .catch(error=>{
            next(error)
        })
})



module.exports = router