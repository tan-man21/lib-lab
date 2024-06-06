const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'LibLab'
    })
})

// DATABASE CONNECTION
const sequelize = new Sequelize(process.env.DB_CONNECTION)
const sequelizeTest = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

// CONTROLLERS
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

const usersController = require('./controllers/users_controller')
app.use('/users', usersController)

const authController = require('./controllers/authentication_controller')
app.use('/auth', authController)


// LISTEN
app.listen(PORT, async () => {
    await sequelizeTest();
    console.log(`Listening on port: ${process.env.PORT}`)
})