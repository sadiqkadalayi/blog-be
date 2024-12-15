const  mongoose  = require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"no Name", 
        trim:true  
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
    status:{
        // type:String,
        // enum:['active','inactive'] 
        type:Boolean,
        default:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        //match:/^([a-zA-Z]+)@/ 
    },
    // age:{
    //     type:Number,
    //     min:10,
    //     max:80
    // },
   
    password:{
        type:String,
        required:true
    },
    cnfPassword:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model('users',userSchema)
module.exports=userModel