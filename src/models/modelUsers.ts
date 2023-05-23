const DB = require('../database/db')
const { DataTypes } = require('sequelize');

const Users = DB.define('Users', {
      username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
      }, 
      password: {
            type: DataTypes.STRING,
            allowNull: false
      }, 
})

export default Users;