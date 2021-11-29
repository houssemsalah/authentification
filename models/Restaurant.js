const mongoose = require("mongoose");
const schema = mongoose.Schema;
const RestaurantSchema = new schema({

name:{
    type: String,
    required: true,
},
address:{
    type: String,
    required: true,
    unique: true
},
number:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
},


});

 


module.exports= mongoose.model('restaurant', RestaurantSchema);