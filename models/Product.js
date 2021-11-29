const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ProductSchema = new schema({
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


});

 


module.exports= mongoose.model('product', ProductSchema);