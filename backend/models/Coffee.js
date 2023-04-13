const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Coffee = sequelize.define("Coffee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Coffee.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Coffee, { foreignKey: "userId" });

module.exports = Coffee;
