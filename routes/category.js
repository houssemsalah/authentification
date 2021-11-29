const router = require('express').Router()
const category = require('../controllers/category')
const isAuth = require('../middleware/passport')
const authAdmin = require('../middleware/authAdmin')


router.route('/category')
    .get(category.getCategories)
    .post( category.addCategory)
    // 
router.route('/category/:id')
    .delete( category.deleteCategory)
    .put( category.updateCategory)

//
//

module.exports = router
 