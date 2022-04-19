const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put(auth, authAdmin, productCtrl.updateProduct)



module.exports = router


// {
//     "product_id":"12",
//     "title":"brijesh",
//     "like":12,
//     "description":"aaaaas asasd dsddd  sdfsd da sasaasa da dsd sdsd sdsdsd sdsd",
//     "images":{
//         "public_id":"test/turjjkuyrqvslnqrnrkz",
//         "url":"https://res.cloudinary.com/cloudpro/image/upload/v1632313111/test/turjjkuyrqvslnqrnrkz.jpg"
//     },
//     "category":"614b1ea317bd07322448f939",
//     "links":{
//         "top":"https://res.cloudinary.com/cloudpro/image/upload/v1632313111/test/turjjkuyrqvslnqrnrkz.jpg",
//         "bottom":"https://res.cloudinary.com/cloudpro/image/upload/v1632313111/test/turjjkuyrqvslnqrnrkz.jpg",
//         "watch":"https://res.cloudinary.com/cloudpro/image/upload/v1632313111/test/turjjkuyrqvslnqrnrkz.jpg"
//     }
// }    