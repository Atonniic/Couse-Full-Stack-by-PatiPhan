const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

// MVC
// Model, View, Controller
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')


// Middleware
const validateMiddleWare = require('./middleware/validationMiddleware')

mongoose.connect('mongodb+srv://admin:1234@cluster0.ebikiov.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store' ,validateMiddleWare)
app.set('view engine', 'ejs')

app.get('/', homeController)

app.get('/about', aboutController)

app.get('/contact', contactController)

app.get('/post/:id', getPostController)

app.get('/posts/new', newPostController)

app.get('/auth/register', newUserController)

app.post('/posts/store', storePostController)

app.post('/users/register', storeUserController)

app.listen(4000, () => {
    console.log('App listening on port 4000');
})