'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductSync extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductSync.init({
    sync_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    platform_id: DataTypes.INTEGER,
    sync_status: DataTypes.STRING,
    additional_details: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'ProductSync',
  });
  return ProductSync;
};