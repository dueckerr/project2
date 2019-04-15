module.exports = function(sequelize, DataTypes) {
  var parts = sequelize.define("parts", {
    parts_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    part_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return parts;
};
