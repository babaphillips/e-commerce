const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Product = require("./Product");
const Tag = require("./Tag");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    product_id: {
      // define a product_id column
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
