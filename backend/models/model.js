const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  no_telp: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{freezeTableName: true,timestamps: false});

const Application = sequelize.define('lamaran', {
    id_lamaran:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    add_zip: {
      type: DataTypes.STRING, // Menyimpan path file ZIP
      allowNull: false
    },
    keterangan:{
        type:DataTypes.STRING,
        allowNull:true
    },
  },{freezeTableName: true,timestamps: false});

module.exports = { User, Application};
