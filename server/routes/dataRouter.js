const router = require('express').Router()
const dataCtrl = require('../controllers/dataCtrl')


router.route('/data')
    .post(dataCtrl.savetocsv)


module.exports = router
