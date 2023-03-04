import express from 'express'
import User from '../Modules/userSchema.js'

const router = express.Router()

const accessMiddleware = (req,res,next)=>{
    const user = req.query
    if(user.username==='admin'&& user.password=='admin'){
        next()
    }
    else{
        res.status(401).send({
            message:'you cannot access this path'
        })
    }
}

router.post('/signUp',async(req,res)=>{
    try{
        const data = req.body
        const result = await User.create(data)
        res.send({
            message:'data added successfully',
            data:result
        })
    }
    catch(err){
        res.status(500).send({
            message:'intenal server error'
        })
        console.log(err)
    }
})
router.get('/allProfiles',accessMiddleware,async(req,res)=>{
    try{
        const result = await User.find()
        res.send(result)
    }
    catch(err){
        res.status(500).send({
            message:'intenal server error'
        })
        console.log(err)
    }
})
router.post('/login',async(req,res)=>{
    try{
        const data = req.body
        const result = await User.find(data)
        if(result.length>0){
            res.send({
                message:'user login success',
                data:result
            })
        }
        else{
            res.status(404).send({
                messgae:'invalid credentials'
            })
        }
    }
    catch(err){
        res.status(500).send({
            message:'intenal server error'
        })
        console.log(err)
    }
})

export default router