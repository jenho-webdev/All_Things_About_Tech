const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connections'); // Adjust the path based on your project structure

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    timestamps: false,
    modelName: 'Tag', // Set the model name
  }
);

module.exports = Tag;
