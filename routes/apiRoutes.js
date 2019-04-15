// var db = require("../models");

// module.exports = function(app) {
//   // Get all users
//   app.get("/api/users", function(req, res) {
//     db.users.findAll({}).then(function(dbusers) {
//       res.json(dbusers);
//       console.log(dbusers);
//     });
//   });

//   // Create a new user
//   app.post("/api/users", function(req, res) {
//     db.users.create(req.body).then(function(dbusers) {
//       res.json(dbusers);
//     });
//   });

//   // Delete user by id
//   app.delete("/api/user/:id", function(req, res) {
//     db.users.destroy({ where: { id: req.params.id } }).then(function(dbusers) {
//       res.json(dbusers);
//     });
//   });
// };
