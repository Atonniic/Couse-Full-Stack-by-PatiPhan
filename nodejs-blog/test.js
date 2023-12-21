const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb+srv://admin:1234@cluster0.ebikiov.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// Insert data
// BlogPost.create({   
//     title: 'This is first post',
//     body: 'This is first post content'
// }).then(() => {
//     console.log('Insert data successfully')
// }).catch((err) => {
//     console.log(err)
// })

// Read data
let id = "657ea6bb95b0d24c1d65b39b"

// BlogPost.findById(id).then((data) => {
//     console.log('Data was found')
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// Update data
// BlogPost.findByIdAndUpdate(id, {   
//     body: 'Button will drive the Jota Porsche 963 in the top hypercar class in the World Endurance Championship, which includes the famous 24 Hours of Le Mans race.'
// }).then(() => {
//     console.log('Update data successfully')
// }).catch((err) => {
//     console.log(err)
// })

// Delete data
BlogPost.findByIdAndDelete(id).then(() => {
    console.log('Deleted data successfully')
}).catch((err) => {
    console.log(err)
})