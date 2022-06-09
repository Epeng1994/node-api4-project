const express = require('express')
const router = express.Router()
const {registerUser} = require('../userInfo')
const {validateInfo, validateUser} = require('../middleware/middleware')

router.post('/', validateInfo, validateUser,(req, res, next)=>{
    registerUser(req.user)
        .then(result=>{
            res.json(result)
        })
        .catch(error=>{
            next(error)
        })
})


module.exports = router