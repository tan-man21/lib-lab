const books = require('express').Router()
const { Book, User } = require('../models')
const { Op } = require('sequelize')

books.get('/', async(req, res) => {
    try {
        const allBooks = await Book.findAll({
            order: [['title', 'ASC']]
        })
        res.json(allBooks)
    } catch (err) {
        res.send(err.message)
    }
})

module.exports = books