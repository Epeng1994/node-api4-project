const {currentUsers} = require('../userInfo')


function errorCheck (error, req, res, next){
    if(error){
        return res.status(500).json({message: 'Server Error'})
    }
}

function validateInfo(req, res, next){
    const {name, password} = req.body
    if(name.trim() == null || name.trim() == '' || password.trim() == null || password.trim() === ''){
        return res.status(400).json({message:'Username and/or password cannot be empty'})
    }else{
        next()
    }
}

function validateUser(req,res,next){
    const {name} = req.body
    const user = currentUsers.find(a=>a.name === name)
    if(user !== undefined){
        req.user = user
        next()
    }else{
        return res.status(400).json({message:'User not found'})
    }
}

module.exports = {
    errorCheck,
    validateInfo,
    validateUser
}