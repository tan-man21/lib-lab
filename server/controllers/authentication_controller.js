const router = require('express').Router()
const db = require('../models')

const { User } = db

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if(!user || req.body.password !== user.password) {
        res.status(404).json({
            message: 'Could not find a user with the provided email or password'
        })
    } else {
        res.status(200).json({user})
    }
})

router.get('/profile', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                userId: 
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})

module.exports = router