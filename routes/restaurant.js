const router = require('express').Router()
const restaurant = require('../controllers/restaurant')
const isAuth = require('../middleware/passport')
const authAdmin = require('../middleware/authAdmin')



router.route('/restaurant')
.post(restaurant.addRestaurant)
.get(restaurant.getRestaurant)
    

router.route('/restaurant/:id')
    
    .put( restaurant.updateRestaurant)

//isAuth(), authAdmin,
//isAuth(), authAdmin,

module.exports = router
 