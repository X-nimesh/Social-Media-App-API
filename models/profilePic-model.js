const { DataTypes } = require('sequelize');
const db = require('../config/db');

const profilePicModel = db.define('profile_pic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    description: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

module.exports = profilePicModel;