const express = require('express')
const router = express.Router()

const controller = require('../controllers/apis/products.api.controller')

router.get('/list',controller.list)

router.post('/create',controller.create)

module.exports = router;