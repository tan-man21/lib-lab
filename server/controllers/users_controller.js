const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')

const { User } = db

// GET all users
router.get('/', async (req, res) => {
    const users = User.findAll()
    res.json(users)
})

// CREATE a new user
router.post('/', async (req, res) => {
    let { password, ...rest } = req.body
    const newUser = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(newUser)
})

module.exports = router