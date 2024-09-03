const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/hotel-booking-user-info")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
