# LibLab

<img src='https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hand holding up books' />

LibLab is a library app where you can explore a variety of books we have to offer. In order to experience all of LibLab's features you must create an account and be signed in. Once you are signed in you can add books to Your Books section. Once you have a book added to your list, it becomse unavailable to other users. You can also leave reviews on each book as well as see what other users are saying about the book. Just in case you change your mind, of course you can delete any review you write on any given book. You cannot, however, delete a review someone else wrote. Website is dynamic and changes some features and/or wordings depending on if user is logged in or not.

### Deployment
This build was run and was built to be deployed for production through AWS. The app works completely on local machine and was able to connect with AWS created database in Postgres while running locally. I attempted to deploy a couple different versions, but was still getting 502 Gatway errors. I was not able to find a solution to successfully deploy.
http://lib-lab-env.eba-sampuimk.us-east-1.elasticbeanstalk.com/

### Installation

To run application locally, first in your terminal run 'npm install' to install all dependencies. Switch to the client folder in your terminal and run 'npm start'. Switch to your server folder and create a .env file. Specify PORT= | DB_USER= | DB_PASS= | DB_NAME= | DB_PORT= | DB_CONNECTION= . When that is set up, while you are still in your server folder run 'nodemon'. LibLab should now be running locally!

### Technologies

- Node
- SQL Database: Postgres
- JSON Web Token

#### Front End Dependencies
- React
- Bootstrap
- React Bootstrap
- React DOM
- React Router DOM
- React Router
- React Scripts
- Web Vitals

#### Backend Dependencies
- Bcrypt
- Cors
- Dotenv
- Express
- Pg
- Pg Hstore
- Sequelize
- Sequlize CLI


### Functionality

- Sign Up / Login Authentication
- Book Gallery for all Books
- Button to add books to your list and to return them
- Detail book page for each book
- Reviews section for each book
- Button to create a new review
- Delete buttons on each review signed-in user posts


### Styles

- Bootstrap Components
- Book / Science Lab theme


## Future Features

- Log out Feature: Currently a user cannot log out once they are logged in when desired.