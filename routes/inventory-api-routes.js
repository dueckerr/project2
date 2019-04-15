var db = require("../models");

module.exports = function(app) {
  // Get all parts_inventory
  app.get("/api/parts_inventory", function(req, res) {
    db.parts_inventory.findAll({}).then(function(dbinventory) {
      res.json(dbinventory);
    });
  });

  // Create a new parts_inventory
  app.post("/api/parts_inventory", function(req, res) {
    db.parts_inventory.create(req.body).then(function(dbinventory) {
      res.json(dbinventory);
    });
  });

  // Delete parts_inventory by id
  app.delete("/api/parts_inventory/:id", function(req, res) {
    db.parts_inventory
      .destroy({ where: { id: req.params.id } })
      .then(function(dbinventory) {
        res.json(dbinventory);
      });
  });
};
