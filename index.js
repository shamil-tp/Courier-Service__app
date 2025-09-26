require('dotenv').config()

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const userAuth = require('./routes/user/auth')
const adminAuth = require('./routes/admin/auth')

app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(express.static('static'))

app.set('view engine','ejs')
// app.set('views','views')

app.use('/',userAuth)
app.use('/admin',adminAuth)

let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`app is working on http://localhost:${port}`)
    connectDB()
})