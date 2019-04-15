var db = require("../models");

module.exports = function(app) {
  // Get all parts
  app.get("/api/parts", function(req, res) {
    db.parts.findAll({}).then(function(dbparts) {
      res.json(dbparts);
    });
  });

  // Create a new parts
  app.post("/api/parts", function(req, res) {
    db.parts.create(req.body).then(function(dbparts) {
      res.json(dbparts);
    });
  });

  // Delete parts by id
  app.delete("/api/parts/:id", function(req, res) {
    db.parts.destroy({ where: { id: req.params.id } }).then(function(dbparts) {
      res.json(dbparts);
    });
  });
};
