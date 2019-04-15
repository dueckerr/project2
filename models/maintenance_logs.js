module.exports = function(sequelize, DataTypes) {
  var maintenance_logs = sequelize.define("maintenance_logs", {
    logs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stroke_range: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unit_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    part: {
      type: DataTypes.STRING,
      allowNull: false
    },
    consumed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });


  return maintenance_logs;
};
