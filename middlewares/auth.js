const jwt = require('jsonwebtoken')

const verifyUser = (req,res,next)=>{
    
    
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);
    
    jwt.verify(token,process.env.JWT_PASS,(err,decodeToken)=>{
        console.log(decodeToken);
        if(err){
            res.status(401).json({message:"unAuthorized User"})
        }else{
            req.userId=decodeToken.id
            next();
        }
        
    })
}

module.exports = verifyUser