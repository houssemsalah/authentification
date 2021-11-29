const Restaurant = require('../models/Restaurant')

const restaurant = {
    updateRestaurant: async(req, res) =>{
        try {
            const {name,adresse,email,number} = req.body;
            await Restaurant.findOneAndUpdate({_id: req.params.id}, {name,adresse,email,number})

            res.json({msg: "restaurant Updated "})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getRestaurant: async(req, res) =>{
        try {
            id="6154f59fd0f83bc3c36a9d72"
            const restaurant = await Restaurant.findById(id)
            res.json(restaurant)
            console.log(restaurant)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    ,
    addRestaurant: async (req, res) =>{
        try {
             
            const {name,address,number,email} = req.body;
            const restaurant = await Restaurant.findOne({name})
            if(restaurant) return res.status(400).json({msg: "This restaurant already exists."})

            const newrestaurant = new Restaurant({name,address,number,email})

            await newrestaurant.save()
            res.json({msg: "Created a restaurant"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }


}


module.exports = restaurant