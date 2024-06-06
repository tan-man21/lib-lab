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
    const newUser = await User.create(req.body)
    res.json(newUser)
})

module.exports = router