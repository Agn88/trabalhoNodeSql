const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trabalho', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection successful');
  } catch (error) {
    console.error('Connection error:', error);
  }
})();

module.exports = sequelize;
