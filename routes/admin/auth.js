const express = require('express')
const { getAdminLogin, getAdminRegister } = require('../../controllers/admin/auth')
const router = express.Router()

router
    .route('/')
    .get(getAdminLogin)
router
    .route('/register')
    .get(getAdminRegister)

module.exports = router
