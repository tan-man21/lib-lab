'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Book }) {
      // define association here
      Review.belongsTo(User, { as: 'user', foreignKey: 'userId' })
      Review.belongsTo(Book, { as: 'book', foreignKey: 'bookId' })
    }
  }
  Review.init({
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    bookId: DataTypes.SMALLINT,
    userId: DataTypes.SMALLINT,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};