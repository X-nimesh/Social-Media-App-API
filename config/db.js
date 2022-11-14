const { Sequelize } = require('sequelize');
const db = new Sequelize({
    datbase: 'postgres', username: 'postgres',
    password: 'nimesh12', dialect: 'postgres',
    port: 5432,
    host: 'localhost'
})
module.exports = db;
