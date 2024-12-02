const mongoose=require('mongoose')

// const DBURI='mongodb://127.0.0.1:27017/sadiqBlog'
// const DBURI='mongodb://localhost:27017'

function connectDB () {
    mongoose.connect(process.env.DBURI,{}).then((res)=>{
        console.log("connected to DB");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports=connectDB