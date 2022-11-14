const { DataTypes } = require('sequelize');
const db = require('../config/db');

const commentModel = db.define('comment_tabel1', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

module.exports = commentModel;