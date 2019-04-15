var db = require("../models");

module.exports = function(app) {
  // Get all fleets
  app.get("/api/fleets", function(req, res) {
    db.fleets.findAll({}).then(function(dbfleets) {
      res.json(dbfleets);
    });
  });

  // Create a new user
  app.post("/api/fleets", function(req, res) {
    db.fleets.create(req.body).then(function(dbfleets) {
      res.json(dbfleets);
    });
  });

  // Delete user by id
  app.delete("/api/user/:id", function(req, res) {
    db.fleets
      .destroy({ where: { id: req.params.id } })
      .then(function(dbfleets) {
        res.json(dbfleets);
      });
  });
};
