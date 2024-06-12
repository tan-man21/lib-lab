'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Review }) {
      // define association here
      Book.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
      })
      Book.hasMany(Review, {foreignKey: 'bookId', as: 'reviews'})
    }
  }
  Book.init({
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};