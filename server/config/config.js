require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "localhost",
    port: process.env.DB_PORT,
    dialect: "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "postgres",
    "password": "postgres",
    "database": "lib_lab",
    "host": "awseb-e-mwb6dcieak-stack-awsebrdsdatabase-5brm2ntuctou.clgeaewe4pj4.us-east-1.rds.amazonaws.com",
    "port": 5432,
    "dialect": "postgres"
  }
}
