var db = require("../models");

module.exports = function(app) {
  // Get all maintenance_logs
  app.get("/api/maintenance_logs", function(req, res) {
    db.maintenance_logs.findAll({}).then(function(dbmaintenance) {
      res.json(dbmaintenance);
    });
  });

  app.get("/api/maintenance_logs/unit_id:unit_id", function(req, res) {
    db.maintenance_logs
      .findAll({ where: { unit_id: req.params.unit_id } })
      .then(function(dbmaintenance) {
        res.json(dbmaintenance);
      });
  });

  // Create a new maintenance_logs
  app.post("/api/maintenance_logs", function(req, res) {
    db.maintenance_logs.create(req.body).then(function(dbmaintenance) {
      res.json(dbmaintenance);
    });
  });

  // Delete maintenance_logs by id
  app.delete("/api/maintenance_logs/:logs_id", function(req, res) {
    db.maintenance_logs
      .destroy({ where: { logs_id: req.params.logs_id } })
      .then(function(dbmaintenance) {
        res.json(dbmaintenance);
      });
  });
};
