const { DataTypes } = require('sequelize');
const db = require('../config/db');

const postModel = db.define('post_table', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

module.exports = postModel;