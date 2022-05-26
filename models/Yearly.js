const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Yearly extends Model {}

Monthly.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    yearly_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearly_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Yearly;