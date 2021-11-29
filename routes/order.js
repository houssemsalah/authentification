const router = require('express').Router()
const order = require('../controllers/order')
const isAuth = require('../middleware/passport')
const authAdmin = require('../middleware/authAdmin')


router.route('/orders').get(order.getOrders).post(order.createOrder)
    //
//isAuth(), authAdmin,

router.route('/orders/:id')
    .delete( order.deleteOrder)
    .get(order.getOrder)
    
//isAuth(), authAdmin,
//isAuth(), authAdmin,
module.exports = router;