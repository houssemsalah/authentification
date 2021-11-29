const Order = require('../models/Order')

const order = {
    getOrders: async(req, res) =>{
        try {
            const orders = await Order.find()
            res.json(orders)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getOrder: async(req, res) =>{
        try {
           
            const order = await Order.findById(id)
            res.json(order)
            console.log(order)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    ,
    // addOrder: async (req, res) =>{
    //     try {
             
    //         const {createdAt,user,product,location,totalPrice,confirmed,livered} = req.body;
           

    //         const newOrder = new Order({createdAt,user,product,location,totalPrice,confirmed,livered})

    //         await newOrder.save()
    //         res.json({msg: "Created a order"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // }
    // ,

    createOrder: async(req, res) =>{
        try {
            const { name, price, description, picture, category,user} = req.body;
            

            const newOrder = new Order({
                 name: name.toLowerCase(), price, description, picture, category,user
            })

            await newOrder.save()
            res.json({msg: "Created a product"})
a
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },


    deleteOrder: async(req, res) =>{
        try {
            await Orders.findByIdAndRemove(req.params.id)
            res.json({msg: "Deleted an Order"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}


module.exports = order