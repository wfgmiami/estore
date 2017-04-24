const conn = require('./conn');

const User = conn.define('user', {
  name: conn.Sequelize.STRING,
  email: {
    type: conn.Sequelize.STRING,
    unique: true,
    validate: {
			isEmail: true,
			notEmpty: true
		}
  },
  password: conn.Sequelize.STRING,
  isAdmin: {
    type: conn.Sequelize.BOOLEAN,
    defaultValue: false
  },
});

module.exports = User;
