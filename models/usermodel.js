const  mongoose  = require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        // default:"no Name", 
        // trim:true  
    },
    createdAt:{
        type:Date,
        default:new Date(),
        immutable:true   
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
        // unique:true,
        //match:/^([a-zA-Z]+)@/ 
    },
    // age:{
    //     type:Number,
    //     min:10,
    //     max:80
    // },
    password:{
        type:String,
        // required:true
    }
})

const userModel = mongoose.model('users',userSchema)
module.exports=userModel