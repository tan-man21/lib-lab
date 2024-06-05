const books = require('express').Router()
const { Book, User } = require('../models')
const { Op } = require('sequelize')

// GET all books
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

// GET one book
books.get('/:id', async(req, res) => {
    try {
        const oneBook = await Book.findOne({
            where: { bookId: req.params.id }
        })
        res.json(oneBook)
    } catch (err) {
        res.send(err.message)
    }
})

// UPDATE book
books.put('/:id', async(req, res) => {
    try {
        const updatedBook = await Book.update(
            req.body,
            { where: { bookId: req.params.id } }
        )
        res.status(200).json('Updated Book')
    } catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = books