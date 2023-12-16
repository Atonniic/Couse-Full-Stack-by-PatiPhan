const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb+srv://admin:1234@cluster0.ebikiov.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', (req, res) => {
    // console.log(req.body)
    // res.redirect('/')

    BlogPost.create(req.body).then(() => {
        console.log('Data inserted successfully')
        res.redirect('/')
    }).catch(err => {
        console.log(err)
    })
})

app.listen(4000, () => {
    console.log('App listening on port 4000');
})