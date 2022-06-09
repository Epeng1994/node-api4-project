const express = require('express')
const router = express.Router()
const {loginUser} = require('../userInfo')
const {validateInfo, validateUser} = require('../middleware/middleware')

router.post('/',validateInfo, validateUser,(req,res,next)=>{
    loginUser(req.body, req.user)
        .then(result=>{
            res.json(result)
        })
        .catch(error=>next(error))
})

module.exports = router