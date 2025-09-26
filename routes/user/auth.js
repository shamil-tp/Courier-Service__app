const express = require('express')
const { getUserLogin } = require('../../controllers/user/auth')
const router = express.Router()

router
    .route('/')
    .get(getUserLogin)

module.exports = router
