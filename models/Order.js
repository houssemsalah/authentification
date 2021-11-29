const mongoose = require("mongoose");
const schema = mongoose.Schema;


const {ObjectId} = mongoose.Schema.Types
const OrderSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
     
    },
    category:{
        type: String,
        required: false,
    },
    picture:{
        type: String,
        required: false,
    },
    CreatedAt:{
        type:Date,
        default:Date.now() 
    },
    user:
    { 
        type : schema.Types.Mixed
    },
    
    Comfirmed:{
        type: String,
        required: false,
        default:"false"
    },
});

 


module.exports= mongoose.model('order', OrderSchema);