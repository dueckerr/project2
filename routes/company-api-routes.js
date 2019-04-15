var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/company", function(req, res) {
    db.company.findAll({}).then(function(dbcompany) {
      res.json(dbcompany);
    });
  });

  // Create a new user
  app.post("/api/company", function(req, res) {
    db.company.create(req.body).then(function(dbcompany) {
      res.json(dbcompany);
    });
  });

  // Delete user by id
  app.delete("/api/user/:id", function(req, res) {
    db.company
      .destroy({ where: { id: req.params.id } })
      .then(function(dbcompany) {
        res.json(dbcompany);
      });
  });
};
