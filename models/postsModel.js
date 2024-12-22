const  mongoose  = require("mongoose");

const postSchema= mongoose.Schema({
    content:{
        type:String,
       
    },
    mob:{
        type: String  
    },
    createdAt:{
        type:Date,
        default:new Date(),
        immutable:true  
        // immutable: true  // ithu kodutha orikkalum change aakan paatillaa ithu from database 
    },
    deleted:{
        // type:String,
        // enum:['active','inactive'] 
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    imagePath:{
        type:String
    }

})

const postModel = mongoose.model('posts',postSchema)
module.exports=postModel