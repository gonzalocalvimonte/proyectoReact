const express = require('express')
const router = express.Router()

const controller = require('../controllers/products.api.controller')

router.get('/list',controller.list)

module.exports = router;