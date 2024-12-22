
const USER=require('../models/usermodel');
const BOOKS = require('../models/books');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const doSignup=(req,res,next)=>{
    

    const saltRounds = 10;
    bcrypt.hash(req.body.password,saltRounds).then((hash)=>{
        console.log(req.body.password,hash);

        const doc={name:req.body.name,mob:req.body.mob,email:req.body.email,password:hash,cnfPassword:req.body.cnfPassword}
         USER(doc).save().then((result)=>{
        res.status(200).json("signup Successfull")
    })
    .catch((err)=>{
        console.log(err);
        next(err)
    })
    }).catch((err)=>{
        console.log(err);
        
    })
 
}

const doLogin = async (req,res,next)=>{
    try{
        console.log(req.body);
        const {email,password}=req.body
        const userData= await USER.findOne({email:email})
        console.log(userData);

        if(userData){

            bcrypt.compare(password,userData.password).then((match)=>{
                console.log(match);
                if(match){
                    const token = JWT.sign({id:userData._id,name:userData.name,email:userData.email},process.env.JWT_PASS,{expiresIn:"1d"})
                    res.status(200).json({message:"Login Successfull",token:token})
                }else{
                    res.status(403).json({message:"invalid Credential"})
                }
            })

            // if(userData.password===password){
            //     const token = JWT.sign({id:userData._id,name:userData.name,email:userData.email},process.env.JWT_PASS,{expiresIn:"1d"})
            //     res.status(200).json({message:"Login Successfull",token:token})
            // }else{
            //     res.status(403).json({message:"invalid Credential"})
            // }
        }else{
            res.status(403).json({message:"invalid Credential"})
        }
     
    }catch(error){

    }
}

const getData = (req,res,next)=>{
    BOOKS.find().limit(100).then((result)=>{
        res.status(200).json(result)
    })
}



module.exports={doSignup, doLogin, getData}