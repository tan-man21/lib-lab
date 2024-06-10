const books = require('express').Router()
const { Book, User } = require('../models')
const jwt = require('json-web-token')
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

// GET all books with userId
books.get('/userbooks', async(req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if(authenticationMethod == 'Bearer'){
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const { id } = result.value

            let allUserBooks = await Book.findAll({
                where: {
                    userId: id
                }
            })
            res.json(allUserBooks)
        }
    } catch {
        res.json(null)
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