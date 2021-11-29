const router = require('express').Router()
const product = require('../controllers/product')
const isAuth = require('../middleware/passport')
const authAdmin = require('../middleware/authAdmin')


router.route('/products').get(product.getProducts).post(  product.createProduct)
    //
//isAuth(), authAdmin,

router.route('/products/:id')
    .delete( product.deleteProduct)
    .put( product.updateProduct)
    .get(product.getProduct)
//isAuth(), authAdmin,
//isAuth(), authAdmin,
module.exports = router;