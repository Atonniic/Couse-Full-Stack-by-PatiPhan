const User = require('../models/User')

module.exports = (req, res) => {
    User.create(req.body).then(() => {
        console.log('User register successfully')
        res.redirect('/')
    }).catch((err) => {
        if (err) {
            console.error(err)
            return res.redirect('/auth/register')
        }
        console.error(err)
    })
}