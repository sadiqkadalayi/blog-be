const POST = require('../models/postsModel')

const createPost=(req,res,next)=>{
    try{
        console.log(req.userId);
        
        POST({
            content:req.body.content,
            createdBy:req.userId,
            imagePath:req.body.imagePath
        }).save().then((result)=>{
            res.status(201).json("post created successfully")
        })

    }catch(error){

    }
}

const addImageController = (req,res,next)=>{
    console.log(req.file);
    res.status(201).json({path:"images/" + req.file.filename})
    
}

const getpostData = (req,res,next)=>{
    POST.find().limit(100).then((result)=>{
        res.status(200).json(result)
    })
}

module.exports={createPost, addImageController,getpostData}