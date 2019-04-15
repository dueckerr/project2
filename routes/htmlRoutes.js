var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.company.findAll({}).then(function(dbpumptracker) {
      res.render("index", {
        msg: "Welcome!",
        pumptracker: dbpumptracker
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/pumpMaint", function(req, res) {
    res.render("pumpMaint");
  });

  app.get("/stock", function(req, res) {
    res.render("stock");
  });

  app.get("/maintenance_logs", function(req, res) {
    res.render("maintenance_logs");
  });

  app.get("/addMaint", function(req, res) {
    res.render("addMaint");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
