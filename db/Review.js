const conn = require('./conn');

const Review = conn.define('review', {
   rating: {
    type: conn.Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 5,
    validate: {
      notEmpty: true,
      isNumeric: true,
      max: 5,
      min: 1,
    }
  },
  review_text: {
    type: conn.Sequelize.TEXT,
    allowNull: false,
    defaultValue: null,
    validate: {
      notEmpty: true,
    }
  }
})

module.exports = Review;
